"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DID = void 0;
const did_resolver_1 = require("did-resolver");
const did_jwt_1 = require("did-jwt");
const dag_jose_utils_1 = require("dag-jose-utils");
const rpc_utils_1 = require("rpc-utils");
const utils_1 = require("./utils");
function isResolver(resolver) {
    return 'registry' in resolver && 'cache' in resolver;
}
class DID {
    constructor({ provider, resolver = {}, resolverOptions } = {}) {
        if (provider != null) {
            this._client = new rpc_utils_1.RPCClient(provider);
        }
        this.setResolver(resolver, resolverOptions);
    }
    get authenticated() {
        return this._id != null;
    }
    get id() {
        if (this._id == null) {
            throw new Error('DID is not authenticated');
        }
        return this._id;
    }
    setProvider(provider) {
        if (this._client == null) {
            this._client = new rpc_utils_1.RPCClient(provider);
        }
        else if (this._client.connection !== provider) {
            throw new Error('A different provider is already set, create a new DID instance to use another provider');
        }
    }
    setResolver(resolver, resolverOptions) {
        this._resolver = isResolver(resolver) ? resolver : new did_resolver_1.Resolver(resolver, resolverOptions);
    }
    authenticate({ provider, paths = [], aud } = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (provider != null) {
                this.setProvider(provider);
            }
            if (this._client == null) {
                throw new Error('No provider available');
            }
            const nonce = utils_1.randomString();
            const jws = yield this._client.request('did_authenticate', {
                nonce,
                aud,
                paths,
            });
            const { kid } = yield this.verifyJWS(jws);
            const payload = utils_1.base64urlToJSON(jws.payload);
            if (!kid.includes(payload.did))
                throw new Error('Invalid authencation response, kid mismatch');
            if (payload.nonce !== nonce)
                throw new Error('Invalid authencation response, wrong nonce');
            if (payload.aud !== aud)
                throw new Error('Invalid authencation response, wrong aud');
            if (payload.exp < Date.now() / 1000)
                throw new Error('Invalid authencation response, expired');
            this._id = payload.did;
            return this._id;
        });
    }
    createJWS(payload, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._client == null)
                throw new Error('No provider available');
            if (this._id == null)
                throw new Error('DID is not authenticated');
            const { jws } = yield this._client.request('did_createJWS', Object.assign(Object.assign({ did: this._id }, options), { payload }));
            return jws;
        });
    }
    createDagJWS(payload, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cid, linkedBlock } = yield dag_jose_utils_1.encodePayload(payload);
            const payloadCid = utils_1.encodeBase64Url(cid.bytes);
            Object.assign(options, { linkedBlock: utils_1.encodeBase64(linkedBlock) });
            const jws = yield this.createJWS(payloadCid, options);
            jws.link = cid;
            return { jws, linkedBlock };
        });
    }
    verifyJWS(jws, options = {}) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof jws !== 'string')
                jws = utils_1.fromDagJWS(jws);
            const kid = utils_1.base64urlToJSON(jws.split('.')[0]).kid;
            if (!kid)
                throw new Error('No "kid" found in jws');
            const didResolutionResult = yield this.resolve(kid);
            const timecheckEnabled = !options.disableTimecheck;
            if (timecheckEnabled) {
                const nextUpdate = (_a = didResolutionResult.didDocumentMetadata) === null || _a === void 0 ? void 0 : _a.nextUpdate;
                if (nextUpdate) {
                    const isEarlier = options.atTime && options.atTime < new Date(nextUpdate).valueOf();
                    const isLater = !isEarlier;
                    if (isLater) {
                        throw new Error(`invalid_jws: signature authored with a revoked DID version: ${kid}`);
                    }
                }
                const updated = (_b = didResolutionResult.didDocumentMetadata) === null || _b === void 0 ? void 0 : _b.updated;
                if (updated && options.atTime && options.atTime < new Date(updated).valueOf()) {
                    throw new Error(`invalid_jws: signature authored before creation of DID version: ${kid}`);
                }
            }
            const publicKeys = ((_c = didResolutionResult.didDocument) === null || _c === void 0 ? void 0 : _c.verificationMethod) || [];
            did_jwt_1.verifyJWS(jws, publicKeys);
            let payload;
            try {
                payload = utils_1.base64urlToJSON(jws.split('.')[1]);
            }
            catch (e) {
            }
            return { kid, payload, didResolutionResult };
        });
    }
    createJWE(cleartext, recipients, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const encrypters = yield did_jwt_1.resolveX25519Encrypters(recipients, this._resolver);
            return did_jwt_1.createJWE(cleartext, encrypters, options.protectedHeader, options.aad);
        });
    }
    createDagJWE(cleartext, recipients, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.createJWE(dag_jose_utils_1.prepareCleartext(cleartext), recipients, options);
        });
    }
    decryptJWE(jwe, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._client == null)
                throw new Error('No provider available');
            if (this._id == null)
                throw new Error('DID is not authenticated');
            const { cleartext } = yield this._client.request('did_decryptJWE', Object.assign(Object.assign({ did: this._id }, options), { jwe }));
            return utils_1.decodeBase64(cleartext);
        });
    }
    decryptDagJWE(jwe) {
        return __awaiter(this, void 0, void 0, function* () {
            const bytes = yield this.decryptJWE(jwe);
            return dag_jose_utils_1.decodeCleartext(bytes);
        });
    }
    resolve(didUrl) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._resolver.resolve(didUrl);
            if ((_a = result.didResolutionMetadata) === null || _a === void 0 ? void 0 : _a.error) {
                const { error, message } = result.didResolutionMetadata;
                const maybeMessage = message ? `, ${message}` : '';
                throw new Error(`Failed to resolve ${didUrl}: ${error}${maybeMessage}`);
            }
            return result;
        });
    }
}
exports.DID = DID;
//# sourceMappingURL=did.js.map
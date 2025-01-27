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
const did_1 = require("../did");
const VERSION_0_VANILLA = {
    didResolutionMetadata: {
        contentType: 'application/did+json',
    },
    didDocument: {
        id: 'did:3:kjzl6cwe1jw14ah8wjy8grgzl52sl18sbyirgi9bqy9yzu28kbxvjmhip99r14k',
        verificationMethod: [
            {
                id: 'did:3:kjzl6cwe1jw14ah8wjy8grgzl52sl18sbyirgi9bqy9yzu28kbxvjmhip99r14k#7wYNHm3nGoNA3Kv',
                type: 'EcdsaSecp256k1Signature2019',
                controller: 'did:3:kjzl6cwe1jw14ah8wjy8grgzl52sl18sbyirgi9bqy9yzu28kbxvjmhip99r14k',
                publicKeyBase58: '2BS946XE3ZGDEsFSq5G3ndodLnAz2TZu1SN1FUw8EwZUC',
            },
            {
                id: 'did:3:kjzl6cwe1jw14ah8wjy8grgzl52sl18sbyirgi9bqy9yzu28kbxvjmhip99r14k#ATBW8KGCmgnXaKR',
                type: 'X25519KeyAgreementKey2019',
                controller: 'did:3:kjzl6cwe1jw14ah8wjy8grgzl52sl18sbyirgi9bqy9yzu28kbxvjmhip99r14k',
                publicKeyBase58: 'HZCZPM7PzCGow5WxopEKeQaKNGQgsZH2d9baiK3FpCYf',
            },
        ],
        authentication: [
            {
                id: 'did:3:kjzl6cwe1jw14ah8wjy8grgzl52sl18sbyirgi9bqy9yzu28kbxvjmhip99r14k#7wYNHm3nGoNA3Kv',
                type: 'EcdsaSecp256k1Signature2019',
                controller: 'did:3:kjzl6cwe1jw14ah8wjy8grgzl52sl18sbyirgi9bqy9yzu28kbxvjmhip99r14k',
                publicKeyBase58: '2BS946XE3ZGDEsFSq5G3ndodLnAz2TZu1SN1FUw8EwZUC',
            },
        ],
        keyAgreement: [
            {
                id: 'did:3:kjzl6cwe1jw14ah8wjy8grgzl52sl18sbyirgi9bqy9yzu28kbxvjmhip99r14k#ATBW8KGCmgnXaKR',
                type: 'X25519KeyAgreementKey2019',
                controller: 'did:3:kjzl6cwe1jw14ah8wjy8grgzl52sl18sbyirgi9bqy9yzu28kbxvjmhip99r14k',
                publicKeyBase58: 'HZCZPM7PzCGow5WxopEKeQaKNGQgsZH2d9baiK3FpCYf',
            },
        ],
    },
    didDocumentMetadata: {
        versionId: '0',
    },
};
const VERSION_0_ROTATED = {
    didResolutionMetadata: {
        contentType: 'application/did+json',
    },
    didDocument: {
        id: 'did:3:kjzl6cwe1jw14ah8wjy8grgzl52sl18sbyirgi9bqy9yzu28kbxvjmhip99r14k',
        verificationMethod: [
            {
                id: 'did:3:kjzl6cwe1jw14ah8wjy8grgzl52sl18sbyirgi9bqy9yzu28kbxvjmhip99r14k#7wYNHm3nGoNA3Kv',
                type: 'EcdsaSecp256k1Signature2019',
                controller: 'did:3:kjzl6cwe1jw14ah8wjy8grgzl52sl18sbyirgi9bqy9yzu28kbxvjmhip99r14k',
                publicKeyBase58: '2BS946XE3ZGDEsFSq5G3ndodLnAz2TZu1SN1FUw8EwZUC',
            },
            {
                id: 'did:3:kjzl6cwe1jw14ah8wjy8grgzl52sl18sbyirgi9bqy9yzu28kbxvjmhip99r14k#ATBW8KGCmgnXaKR',
                type: 'X25519KeyAgreementKey2019',
                controller: 'did:3:kjzl6cwe1jw14ah8wjy8grgzl52sl18sbyirgi9bqy9yzu28kbxvjmhip99r14k',
                publicKeyBase58: 'HZCZPM7PzCGow5WxopEKeQaKNGQgsZH2d9baiK3FpCYf',
            },
        ],
        authentication: [
            {
                id: 'did:3:kjzl6cwe1jw14ah8wjy8grgzl52sl18sbyirgi9bqy9yzu28kbxvjmhip99r14k#7wYNHm3nGoNA3Kv',
                type: 'EcdsaSecp256k1Signature2019',
                controller: 'did:3:kjzl6cwe1jw14ah8wjy8grgzl52sl18sbyirgi9bqy9yzu28kbxvjmhip99r14k',
                publicKeyBase58: '2BS946XE3ZGDEsFSq5G3ndodLnAz2TZu1SN1FUw8EwZUC',
            },
        ],
        keyAgreement: [
            {
                id: 'did:3:kjzl6cwe1jw14ah8wjy8grgzl52sl18sbyirgi9bqy9yzu28kbxvjmhip99r14k#ATBW8KGCmgnXaKR',
                type: 'X25519KeyAgreementKey2019',
                controller: 'did:3:kjzl6cwe1jw14ah8wjy8grgzl52sl18sbyirgi9bqy9yzu28kbxvjmhip99r14k',
                publicKeyBase58: 'HZCZPM7PzCGow5WxopEKeQaKNGQgsZH2d9baiK3FpCYf',
            },
        ],
    },
    didDocumentMetadata: {
        nextUpdate: '2021-07-07T08:12:19Z',
        versionId: '0',
        nextVersionId: 'bafyreiebh2rwia4qq5v43dqlnofkczsvoghdxymahv4p5lkp5ivr5kgatm',
    },
};
const VERSION_NEXT = {
    didResolutionMetadata: {
        contentType: 'application/did+json',
    },
    didDocument: {
        id: 'did:3:kjzl6cwe1jw14ah8wjy8grgzl52sl18sbyirgi9bqy9yzu28kbxvjmhip99r14k',
        verificationMethod: [
            {
                id: 'did:3:kjzl6cwe1jw14ah8wjy8grgzl52sl18sbyirgi9bqy9yzu28kbxvjmhip99r14k#C26y2DZeJ9EMYsF',
                type: 'EcdsaSecp256k1Signature2019',
                controller: 'did:3:kjzl6cwe1jw14ah8wjy8grgzl52sl18sbyirgi9bqy9yzu28kbxvjmhip99r14k',
                publicKeyBase58: 'vTcTTxzsSsAiqTb9EH7tC13gG1Dfkdya36TmLxU7951X',
            },
            {
                id: 'did:3:kjzl6cwe1jw14ah8wjy8grgzl52sl18sbyirgi9bqy9yzu28kbxvjmhip99r14k#sfecbasdBzBfhcb',
                type: 'X25519KeyAgreementKey2019',
                controller: 'did:3:kjzl6cwe1jw14ah8wjy8grgzl52sl18sbyirgi9bqy9yzu28kbxvjmhip99r14k',
                publicKeyBase58: 'H1s1bgxnxZPdhF2ZXqACwi3QxPCsZGVVjcsC8jLexKqq',
            },
        ],
        authentication: [
            {
                id: 'did:3:kjzl6cwe1jw14ah8wjy8grgzl52sl18sbyirgi9bqy9yzu28kbxvjmhip99r14k#C26y2DZeJ9EMYsF',
                type: 'EcdsaSecp256k1Signature2019',
                controller: 'did:3:kjzl6cwe1jw14ah8wjy8grgzl52sl18sbyirgi9bqy9yzu28kbxvjmhip99r14k',
                publicKeyBase58: 'vTcTTxzsSsAiqTb9EH7tC13gG1Dfkdya36TmLxU7951X',
            },
        ],
        keyAgreement: [
            {
                id: 'did:3:kjzl6cwe1jw14ah8wjy8grgzl52sl18sbyirgi9bqy9yzu28kbxvjmhip99r14k#sfecbasdBzBfhcb',
                type: 'X25519KeyAgreementKey2019',
                controller: 'did:3:kjzl6cwe1jw14ah8wjy8grgzl52sl18sbyirgi9bqy9yzu28kbxvjmhip99r14k',
                publicKeyBase58: 'H1s1bgxnxZPdhF2ZXqACwi3QxPCsZGVVjcsC8jLexKqq',
            },
        ],
    },
    didDocumentMetadata: {
        updated: '2021-07-07T08:12:19Z',
        versionId: 'bafyreiebh2rwia4qq5v43dqlnofkczsvoghdxymahv4p5lkp5ivr5kgatm',
    },
};
const jwsV0 = 'eyJraWQiOiJkaWQ6MzpranpsNmN3ZTFqdzE0YWg4d2p5OGdyZ3psNTJzbDE4c2J5aXJnaTlicXk5eXp1MjhrYnh2am1oaXA5OXIxNGs_dmVyc2lvbi1pZD0wIzd3WU5IbTNuR29OQTNLdiIsImFsZyI6IkVTMjU2SyJ9.eyJoZWxsbyI6IndvcmxkIn0.cHVXU7QW2pvBJpVIBCLhnkCQ0k4Up3cNRqiyeryRbPOSrZdAoQmWy1OfzNFzgY90nol26KJxHWnknSyu5sY__Q';
const jwsVNext = 'eyJraWQiOiJkaWQ6MzpranpsNmN3ZTFqdzE0YWg4d2p5OGdyZ3psNTJzbDE4c2J5aXJnaTlicXk5eXp1MjhrYnh2am1oaXA5OXIxNGs_dmVyc2lvbi1pZD1iYWZ5cmVpZWJoMnJ3aWE0cXE1djQzZHFsbm9ma2N6c3ZvZ2hkeHltYWh2NHA1bGtwNWl2cjVrZ2F0bSNDMjZ5MkRaZUo5RU1Zc0YiLCJhbGciOiJFUzI1NksifQ.eyJoZWxsbyI6IndvcmxkIn0.GRKdQMwbGw5t8Q_8asCV88jofZhJaPZlLs82-E_DvNLwfRBR8_Sbt_GwHPqdghA9oSN3XrTsI9KlKjwf8G6sew';
test('vanilla version 0', () => __awaiter(void 0, void 0, void 0, function* () {
    const did = new did_1.DID();
    did.resolve = () => Promise.resolve(VERSION_0_VANILLA);
    const { kid } = yield did.verifyJWS(jwsV0);
    expect(kid).toEqual('did:3:kjzl6cwe1jw14ah8wjy8grgzl52sl18sbyirgi9bqy9yzu28kbxvjmhip99r14k?version-id=0#7wYNHm3nGoNA3Kv');
}));
describe('rotatedKey', () => {
    const did = new did_1.DID();
    did.resolve = (didUrl) => {
        const isVersion0 = /version-id=0/.exec(didUrl);
        if (isVersion0) {
            return Promise.resolve(VERSION_0_ROTATED);
        }
        else {
            return Promise.resolve(VERSION_NEXT);
        }
    };
    test('throw', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expect(did.verifyJWS(jwsV0)).rejects.toThrow(/invalid_jws: signature authored with a revoked DID version/);
    }));
    test('pass if timecheck disabled', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expect(did.verifyJWS(jwsV0, { disableTimecheck: true })).resolves.toBeTruthy();
    }));
});
describe('atTime', () => {
    const did = new did_1.DID();
    const fauxResolve = (didUrl) => {
        const isVersion0 = /version-id=0/.exec(didUrl);
        if (isVersion0) {
            return Promise.resolve(VERSION_0_ROTATED);
        }
        else {
            return Promise.resolve(VERSION_NEXT);
        }
    };
    beforeEach(() => {
        did.resolve = fauxResolve;
    });
    const beforeRotation = new Date('2021-07-07T08:00:19Z').valueOf();
    const afterRotation = new Date('2021-07-07T08:40:19Z').valueOf();
    test('ok before rotation', () => __awaiter(void 0, void 0, void 0, function* () {
        const { kid } = yield did.verifyJWS(jwsV0, { atTime: beforeRotation });
        expect(kid).toMatchSnapshot();
    }));
    test('fail after rotation', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expect(did.verifyJWS(jwsV0, { atTime: afterRotation })).rejects.toThrow(/invalid_jws: signature authored with a revoked DID version/);
    }));
    test('ok after rotation if timecheck disabled', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expect(did.verifyJWS(jwsV0, { atTime: afterRotation, disableTimecheck: true })).resolves.toBeTruthy();
    }));
    test('before DID version available', () => __awaiter(void 0, void 0, void 0, function* () {
        did.resolve = () => Promise.resolve(VERSION_NEXT);
        yield expect(did.verifyJWS(jwsVNext, { atTime: beforeRotation })).rejects.toThrow(/invalid_jws: signature authored before creation/);
    }));
    test('before DID version available if timecheck disabled', () => __awaiter(void 0, void 0, void 0, function* () {
        did.resolve = () => Promise.resolve(VERSION_NEXT);
        yield expect(did.verifyJWS(jwsVNext, { atTime: beforeRotation, disableTimecheck: true })).resolves.toBeTruthy();
    }));
    test('before DID available for v0', () => __awaiter(void 0, void 0, void 0, function* () {
        const { kid } = yield did.verifyJWS(jwsV0, { atTime: beforeRotation });
        expect(kid).toMatchSnapshot();
    }));
});
//# sourceMappingURL=jws-verification-behavior.test.js.map
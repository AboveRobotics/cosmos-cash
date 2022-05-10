
import json
import base64
import datetime
import hashlib

from stargate_py.stargate import Client
from verifiable_credential.tx_pb2 \
        import MsgIssueCredential, MsgRevokeCredential
from verifiable_credential.verifiable_credential_pb2 \
        import VerifiableCredential, ArbitraryCredentialSubject, UserCredentialSubject, Proof
from did.tx_pb2 import MsgCreateDidDocument, Verification
from did.did_pb2 import VerificationMethod
from google.protobuf.timestamp_pb2 import Timestamp

# during myself reflect hat mixture extra sniff knife lunch rare naive noodle prosper manage critic pluck slight obey swamp grief jelly detect junk fire
skey = '97672bf37d462d932e58ee91dab4979724629158bafa01116ab005fe132aaaae'
pkey = '02e5012f88a70d6c9c7b57c5f20337f4f23fb097b2640d9bbe9fb89e8ae9605832'
addr = 'above1vucnunkurqs8p4gmnar35yen98e0ddsmzkrvuv'

client = Client(bytes.fromhex(skey), bytes.fromhex(pkey), addr, 'work', 'http://localhost:26657')

# verify issuer == sender
# client enforce bytes for keys in constructor

current_time = datetime.datetime.utcnow()

attr = base64.b64encode(
    json.dumps({
        'make': 'Nike',
        'model': 'Air Max',
        'year': 2020,
        'color': 'white & red',
        'no': '13/100'
    }).encode()
)

subj = ArbitraryCredentialSubject(
    id = 'did:nft:above1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsne7t7j_0',
    type = 'nike_shoe_v0.0.0',
    attributes = attr
)

current_ts = Timestamp()
current_ts.FromDatetime(current_time)
cred = VerifiableCredential(
    context = ["https://www.w3.org/2018/credentials/v1"],
    id = 'did:nft:above1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsne7t7j_0_cred0',
    type = ["VerifiableCredential"],
    issuer = 'did:cosmos:above1vucnunkurqs8p4gmnar35yen98e0ddsmzkrvuv',
    issuance_date = current_ts,
    arbitrary_cred = subj
)

proof = Proof(
    type = 'Secp256k1Signature2020',
    created = current_time.isoformat(),
    proof_purpose = 'authentication',
    verification_method = 'did:cosmos:above1vucnunkurqs8p4gmnar35yen98e0ddsmzkrvuv#6MkiJn42pscPLRTCnGdVhLAtGsXcDQ85sTVT4CSNTjVS711',
    signature = base64.b64encode(client.sign(hashlib.sha256(cred.SerializeToString()).digest()))
)

cred.proof.CopyFrom(proof)

msg = MsgIssueCredential(
    owner = addr,
    credential = cred
)

# DID = f'did:cosmos:{addr}'
# msg = MsgCreateDidDocument(
#     id = DID,
#     controllers = [],
#     verifications = [
#         Verification(
#             relationships=[
#                 'authentication',
#             ],
#             method=VerificationMethod(
#                 id           = f'{DID}#6MkiJn42pscPLRTCnGdVhLAtGsXcDQ85sTVT4CSNTjVS711',
#                 type         = 'Ed25519VerificationKey2020',
#                 controller   = DID,
#                 publicKeyHex = '02e5012f88a70d6c9c7b57c5f20337f4f23fb097b2640d9bbe9fb89e8ae9605832'
#             )
#         ),
#     ],
#     services = [],
#     signer = addr
# )

# msg = MsgRevokeCredential(
#     credential_id = 'cred0',
#     owner = addr
# )

txhash, _ = client.signAndBroadcastTx([msg], [('1', 'uabv')], 200000)
if (client.error):
    print(client.error)



import base64
import json
from stargate_py.stargate import Client
from verifiable_credential.query_pb2 import \
    QueryVerifiableCredentialRequest, QueryVerifiableCredentialResponse

if __name__ == '__main__':

    qclient = Client(chain_id='work', rpc_endpoint='http://localhost:26657')

    vcid = input("Enter VC ID: ")

    req = QueryVerifiableCredentialRequest(
        verifiable_credential_id = vcid
    )

    res = qclient.query(req, QueryVerifiableCredentialResponse)
    if qclient.error:
        print(qclient.error)
        exit(1)

    print(res.verifiable_credential.arbitrary_cred.id)
    print(res.verifiable_credential.arbitrary_cred.type)
    print(res.verifiable_credential.arbitrary_cred.attributes)
    attr_b64: bytes = res.verifiable_credential.arbitrary_cred.attributes
    print(json.loads(base64.b64decode(attr_b64)))
    
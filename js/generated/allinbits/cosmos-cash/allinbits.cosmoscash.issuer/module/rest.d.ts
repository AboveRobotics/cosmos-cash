export interface IssuerIssuer {
    token?: string;
    /** @format int32 */
    fee?: number;
    issuerDid?: string;
    paused?: boolean;
}
export declare type IssuerMsgBurnTokenResponse = object;
export declare type IssuerMsgCreateIssuerResponse = object;
export declare type IssuerMsgIssueUserCredentialResponse = object;
export declare type IssuerMsgMintTokenResponse = object;
export declare type IssuerMsgPauseTokenResponse = object;
export interface IssuerQueryIssuersResponse {
    /** validators contains all the queried validators. */
    issuers?: IssuerIssuer[];
    /** pagination defines the pagination in the response. */
    pagination?: V1Beta1PageResponse;
}
export interface ProtobufAny {
    "@type"?: string;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
/**
* Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
*/
export interface V1Beta1Coin {
    denom?: string;
    amount?: string;
}
/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
    /**
     * key is a value returned in PageResponse.next_key to begin
     * querying the next page most efficiently. Only one of offset or key
     * should be set.
     * @format byte
     */
    key?: string;
    /**
     * offset is a numeric offset that can be used when key is unavailable.
     * It is less efficient than using key. Only one of offset or key should
     * be set.
     * @format uint64
     */
    offset?: string;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     * @format uint64
     */
    limit?: string;
    /**
     * count_total is set to true  to indicate that the result set should include
     * a count of the total number of items available for pagination in UIs.
     * count_total is only respected when offset is used. It is ignored when key
     * is set.
     */
    countTotal?: boolean;
    /**
     * reverse is set to true if results are to be returned in the descending order.
     *
     * Since: cosmos-sdk 0.43
     */
    reverse?: boolean;
}
/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
    /** @format byte */
    nextKey?: string;
    /** @format uint64 */
    total?: string;
}
export interface VerifiablecredentialAddress {
    addrType?: string;
    thfare?: string;
    premise?: string;
    postcode?: string;
    locality?: string;
    country?: string;
}
export interface VerifiablecredentialId {
    id?: string;
    type?: string;
}
export interface VerifiablecredentialLegalPerson {
    names?: VerifiablecredentialName[];
    ctryReg?: string;
}
/**
* The LicenseCredential message makes reference to the classes of crypto assets
described in MiCA, but the license could easily be adopted as proof of
authority to issue various types of crypto or virtual assets. The LicenseCredential
is used a a credential_subject in a verifiable credential.
*/
export interface VerifiablecredentialLicenseCredentialSubject {
    id?: string;
    /**
     * The license type is defined by the MICA regulation. This will
     * be used to identify different asset classes of tokens being issuedi
     * by the credential_subject.
     */
    licenseType?: string;
    /** The country field represents the country the credential was issued in. */
    country?: string;
    authority?: string;
    /**
     * The circulation_limit represents the amount of a token
     * that can be minted by a credential_subject.
     */
    circulationLimit?: V1Beta1Coin;
}
export interface VerifiablecredentialName {
    name?: string;
    type?: string;
}
/**
* The Proof message represents a cryptographic proof that the
credential has not been tampered with or changed without the issuersi
knowledge. This can be used to verify the verifiable credential.
*/
export interface VerifiablecredentialProof {
    type?: string;
    created?: string;
    proofPurpose?: string;
    verificationMethod?: string;
    signature?: string;
}
export interface VerifiablecredentialRegistrationCredentialSubject {
    id?: string;
    address?: VerifiablecredentialAddress;
    ids?: VerifiablecredentialId[];
    legalPersons?: VerifiablecredentialLegalPerson[];
}
export interface VerifiablecredentialRegulatorCredentialSubject {
    id?: string;
    name?: string;
    /** The country field represents the country the credential was issued in. */
    country?: string;
}
/**
* UserCredentialSubject represents a privacy respecting
credential_subject of a verifiable credential. This
is used as an on chain verifiable credential.
*/
export interface VerifiablecredentialUserCredentialSubject {
    id?: string;
    root?: string;
    isVerified?: boolean;
}
export interface VerifiablecredentialVerifiableCredential {
    /** @context is spec for verifiable credential. */
    context?: string[];
    /**
     * The value of the id property MUST be a single URI. It is RECOMMENDED
     * that the URI in the id be one which, if dereferenced, results in a
     * document containing machine-readable information about the id.
     */
    id?: string;
    /**
     * The value of the type property MUST be, or map to (through interpretation
     * of the @context property), one or more URIs. If more than one URI is
     * provided, the URIs MUST be interpreted as an unordered set.
     */
    type?: string[];
    /**
     * The value of the issuer property MUST be either a URI or an object
     * containing an id property. It is RECOMMENDED that the URI in the issuer
     * or its id be one which, if dereferenced, results in a document containing
     * machine-readable information about the issuer that can be used to verify
     * the information expressed in the credential.
     */
    issuer?: string;
    /**
     * A credential MUST have an issuanceDate property. The value of the issuanceDate
     * property MUST be a string value of an [RFC3339] combined date and time string
     * representing the date and time the credential becomes valid, which could
     * be a date and time in the future. Note that this value represents the earliest
     * point in time at which the information associated with the credentialSubject
     * property becomes valid.
     * @format date-time
     */
    issuanceDate?: string;
    regulatorCred?: VerifiablecredentialRegulatorCredentialSubject;
    /**
     * The value of license_cred represents a registration issued by a regulatory
     * body. The license is used to describe the entity that require a license.
     */
    registrationCred?: VerifiablecredentialRegistrationCredentialSubject;
    /**
     * The LicenseCredential message makes reference to the classes of crypto assets
     * described in MiCA, but the license could easily be adopted as proof of
     * authority to issue various types of crypto or virtual assets. The LicenseCredential
     * is used a a credential_subject in a verifiable credential.
     */
    licenseCred?: VerifiablecredentialLicenseCredentialSubject;
    /**
     * The value of user_cred represents a privacy respecting verifiable
     * credential. This is used when adding sensitive information about
     * a credential subject. It allows the credential subject to create
     * and validate proofs about what is contained in a credential without
     * revealing the values contained in the credential otherwise known as
     * selective disclosure.
     */
    userCred?: VerifiablecredentialUserCredentialSubject;
    /**
     * One or more cryptographic proofs that can be used to detect tampering
     * and verify the authorship of a credential or presentation. The specific
     * method used for an embedded proof MUST be included using the type property.
     */
    proof?: VerifiablecredentialProof;
}
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: keyof Omit<Body, "body" | "bodyUsed">;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker;
    private abortControllers;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType) => void;
    private addQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title issuer/issuer.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryIssuers
     * @request GET:/allinbits/issuer/issuers
     */
    queryIssuers: (query?: {
        status?: string;
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<IssuerQueryIssuersResponse, RpcStatus>>;
}
export {};

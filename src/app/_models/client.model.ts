export class ClientModel {
  private _client_id!: string;
  private _realm_id!: string;

  private _uuid!: string;
  private _authorizationGrantTypes!: string[];
  private _resourceIds!: [];
  private _authorities!: [];
  private _scopes!: [];
  private _redirectUris!: [];
  private _accessTokenValiditySeconds!: string;
  private _refreshTokenValiditySeconds!: string;
  private _auto_approve!: boolean;
  private _secretRequired!: boolean;
  private _scoped!: boolean;
  private _name!: string;

  get client_id(): string {
    return this._client_id;
  }

  set client_id(value: string) {
    this._client_id = value;
  }

  get authorizationGrantTypes(): string[] {
    return this._authorizationGrantTypes;
  }

  set authorizationGrantTypes(value: string[]) {
    this._authorizationGrantTypes = value;
  }

  get resourceIds(): [] {
    return this._resourceIds;
  }

  set resourceIds(value: []) {
    this._resourceIds = value;
  }


  get authorities(): [] {
    return this._authorities;
  }

  set authorities(value: []) {
    this._authorities = value;
  }

  get scopes(): [] {
    return this._scopes;
  }

  set scopes(value: []) {
    this._scopes = value;
  }

  get redirectUris(): [] {
    return this._redirectUris;
  }

  set redirectUris(value: []) {
    this._redirectUris = value;
  }


  get accessTokenValiditySeconds(): string {
    return this._accessTokenValiditySeconds;
  }

  set accessTokenValiditySeconds(value: string) {
    this._accessTokenValiditySeconds = value;
  }

  get refreshTokenValiditySeconds(): string {
    return this._refreshTokenValiditySeconds;
  }

  set refreshTokenValiditySeconds(value: string) {
    this._refreshTokenValiditySeconds = value;
  }

  get auto_approve(): boolean {
    return this._auto_approve;
  }

  set auto_approve(value: boolean) {
    this._auto_approve = value;
  }

  get secretRequired(): boolean {
    return this._secretRequired;
  }

  set secretRequired(value: boolean) {
    this._secretRequired = value;
  }

  get realm_id(): string {
    return this._realm_id;
  }

  set realm_id(value: string) {
    this._realm_id = value;
  }

  get uuid(): string {
    return this._uuid;
  }

  set uuid(value: string) {
    this._uuid = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get scoped(): boolean {
    return this._scoped;
  }

  set scoped(value: boolean) {
    this._scoped = value;
  }
}

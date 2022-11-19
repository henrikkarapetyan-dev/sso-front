export class ClientMainInfoEditModel {

  private _client_id!: string;
  private _realm_id!: string;

  private _name!: string;
  private _accessTokenValiditySeconds!: string;
  private _refreshTokenValiditySeconds!: string;
  private _auto_approve!: boolean;
  private _secretRequired!: boolean;
  private _scoped!: boolean;


  get client_id(): string {
    return this._client_id;
  }

  set client_id(value: string) {
    this._client_id = value;
  }

  get realm_id(): string {
    return this._realm_id;
  }

  set realm_id(value: string) {
    this._realm_id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
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

  get scoped(): boolean {
    return this._scoped;
  }

  set scoped(value: boolean) {
    this._scoped = value;
  }
}

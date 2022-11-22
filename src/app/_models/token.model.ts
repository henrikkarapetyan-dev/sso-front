import {BaseModel} from "./BaseModel";

export class TokenModel extends BaseModel{
  get access_token(): string {
    return this._access_token;
  }

  set access_token(value: string) {
    this._access_token = value;
  }

  get refresh_token(): string {
    return this._refresh_token;
  }

  set refresh_token(value: string) {
    this._refresh_token = value;
  }

  get token_type(): string {
    return this._token_type;
  }

  set token_type(value: string) {
    this._token_type = value;
  }

  get expires_in(): number {
    return this._expires_in;
  }

  set expires_in(value: number) {
    this._expires_in = value;
  }

  get scope(): string {
    return this._scope;
  }

  set scope(value: string) {
    this._scope = value;
  }

  get organization(): string {
    return this._organization;
  }

  set organization(value: string) {
    this._organization = value;
  }

  get iss(): string {
    return this._iss;
  }

  set iss(value: string) {
    this._iss = value;
  }

  get jti(): string {
    return this._jti;
  }

  set jti(value: string) {
    this._jti = value;
  }

  private _token_type!:string;
  private _access_token!: string;
  private _refresh_token!:string;
  private _expires_in!:number;
  private _scope!:string;
  private _organization!:string;
  private _iss!:string;
  private _jti!:string;
}

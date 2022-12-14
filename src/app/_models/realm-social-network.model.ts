import {BaseModel} from "./BaseModel";

export class RealmSocialNetworkModel extends BaseModel{
  private _appId!:string;
  private _appSecret!:string;
  private _scopes!:string;
  private _status!:string;
  private _realmId!:string;
  private _socialId!:string;
  private _iconUrl!:string;


  get appId(): string {
    return this._appId;
  }

  set appId(value: string) {
    this._appId = value;
  }

  get appSecret(): string {
    return this._appSecret;
  }

  set appSecret(value: string) {
    this._appSecret = value;
  }

  get scopes(): string {
    return this._scopes;
  }

  set scopes(value: string) {
    this._scopes = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get realmId(): string {
    return this._realmId;
  }

  set realmId(value: string) {
    this._realmId = value;
  }

  get socialId(): string {
    return this._socialId;
  }

  set socialId(value: string) {
    this._socialId = value;
  }

  get iconUrl(): string {
    return this._iconUrl;
  }

  set iconUrl(value: string) {
    this._iconUrl = value;
  }
}

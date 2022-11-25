import {BaseModel} from "./BaseModel";

export class RedirectUriModel extends BaseModel{
  private _uri!:string
  private _clientId!:string
  private _uuid!:string


  get uri(): string {
    return this._uri;
  }

  set uri(value: string) {
    this._uri = value;
  }

  get clientId(): string {
    return this._clientId;
  }

  set clientId(value: string) {
    this._clientId = value;
  }

  get uuid(): string {
    return this._uuid;
  }

  set uuid(value: string) {
    this._uuid = value;
  }
}

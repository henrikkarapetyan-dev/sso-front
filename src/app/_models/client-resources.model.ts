import {BaseModel} from "./BaseModel";

export class ClientResourcesModel extends BaseModel {
  private _resourceId!: string;
  private _id!: string;
  private _status!:string;
  private _realmId!:string;
  private _uuid!:string;


  get resourceId(): string {
    return this._resourceId;
  }

  set resourceId(value: string) {
    this._resourceId = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
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

  get uuid(): string {
    return this._uuid;
  }

  set uuid(value: string) {
    this._uuid = value;
  }
}

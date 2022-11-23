import {BaseModel} from "./BaseModel";

export class ResourceModel extends BaseModel{
  private _uuid!: string
  private _resourceId!: string
  private _status!: string

  get uuid(): string {
    return this._uuid;
  }

  set uuid(value: string) {
    this._uuid = value;
  }


  get resourceId(): string {
    return this._resourceId;
  }

  set resourceId(value: string) {
    this._resourceId = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }
}

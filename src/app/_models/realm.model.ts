import {BaseModel} from "./BaseModel";

export class RealmModel extends BaseModel{
  private _name!:string;

  private _realmId!:string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }


  get realmId(): string {
    return this._realmId;
  }

  set realmId(value: string) {
    this._realmId = value;
  }
}

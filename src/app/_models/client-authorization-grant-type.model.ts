import {BaseModel} from "./BaseModel";

export class ClientAuthorizationGrantTypeModel extends BaseModel {
  private _name!: string;


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

import {BaseModel} from "./BaseModel";

export class ClientScopesModel extends BaseModel{
  private _name!: string;
  private _id!: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }
}

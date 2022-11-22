import {BaseModel} from "./BaseModel";

export class RoleModel  extends BaseModel{
  private _uuid!: string
  private _name!: string

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
}

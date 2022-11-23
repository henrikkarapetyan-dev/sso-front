import {BaseModel} from "./BaseModel";

export class UserPasswordModel extends BaseModel{
  private _newPassword!: string;


  get newPassword(): string {
    return this._newPassword;
  }

  set newPassword(value: string) {
    this._newPassword = value;
  }
}

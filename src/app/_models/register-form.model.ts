import {BaseModel} from "./BaseModel";

export class RegisterFormModel extends BaseModel{
  private _username!:string;

  private _phone!:string;

  private _email!:string;

  private _firstName!:string;

  private _lastName!:string;

  private _password!:string;


  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }
}

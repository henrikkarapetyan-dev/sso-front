import {BaseModel} from "./BaseModel";
import {RoleModel} from "./role.model";

export class UserModel extends BaseModel {
  private _firstName!: string;
  private _lastName!: string;
  private _uuid!: string;
  private _realmId!: string;
  private _username!: string;
  private _email!: string;
  private _phone!: string;
  private _accountExpired!: boolean;
  private _accountLocked!: boolean;
  private _credentialsExpired!: boolean;
  private _enabled!: boolean;
  private _emailVerified!: boolean;
  private _phoneVerified!: boolean;
  private _user_roles!: RoleModel[];
  private _passwordExpired!: boolean;

  get uuid(): string {
    return this._uuid;
  }

  set uuid(value: string) {
    this._uuid = value;
  }

  get userFullName(): string {
    return this.firstName + " " + this.lastName
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

  get realmId(): string {
    return this._realmId;
  }

  set realmId(value: string) {
    this._realmId = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get accountExpired(): boolean {
    return this._accountExpired;
  }

  set accountExpired(value: boolean) {
    this._accountExpired = value;
  }

  get accountLocked(): boolean {
    return this._accountLocked;
  }

  set accountLocked(value: boolean) {
    this._accountLocked = value;
  }

  get credentialsExpired(): boolean {
    return this._credentialsExpired;
  }

  set credentialsExpired(value: boolean) {
    this._credentialsExpired = value;
  }

  get enabled(): boolean {
    return this._enabled;
  }

  set enabled(value: boolean) {
    this._enabled = value;
  }

  get emailVerified(): boolean {
    return this._emailVerified;
  }

  set emailVerified(value: boolean) {
    this._emailVerified = value;
  }

  get user_roles(): RoleModel[] {
    return this._user_roles;
  }

  set user_roles(value: RoleModel[]) {
    this._user_roles = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get phoneVerified(): boolean {
    return this._phoneVerified;
  }

  set phoneVerified(value: boolean) {
    this._phoneVerified = value;
  }


  get passwordExpired(): boolean {
    return this._passwordExpired;
  }

  set passwordExpired(value: boolean) {
    this._passwordExpired = value;
  }
}

export class ClientPasswordModel{
  private _newPassword!: string;
  private _passwordExpired!: boolean;


  get newPassword(): string {
    return this._newPassword;
  }

  set newPassword(value: string) {
    this._newPassword = value;
  }

  get passwordExpired(): boolean {
    return this._passwordExpired;
  }

  set passwordExpired(value: boolean) {
    this._passwordExpired = value;
  }
}

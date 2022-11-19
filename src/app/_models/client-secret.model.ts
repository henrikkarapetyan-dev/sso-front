export class ClientSecretModel {
  private _secretLine!: string;

  get secretLine(): string {
    return this._secretLine;
  }

  set secretLine(value: string) {
    this._secretLine = value;
  }
}

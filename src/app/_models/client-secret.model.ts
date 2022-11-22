import {BaseModel} from "./BaseModel";

export class ClientSecretModel extends BaseModel{
  private _secretLine!: string;

  get secretLine(): string {
    return this._secretLine;
  }

  set secretLine(value: string) {
    this._secretLine = value;
  }
}

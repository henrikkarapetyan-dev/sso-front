import {BaseModel} from "./BaseModel";

export class ClientAdditionalInformationModel extends BaseModel {

  private _client_id!: string;
  private _text!: string;
  private _name!: string;
  private _uuid!: string;

  get client_id(): string {
    return this._client_id;
  }

  set client_id(value: string) {
    this._client_id = value;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }


  get uuid(): string {
    return this._uuid;
  }

  set uuid(value: string) {
    this._uuid = value;
  }
}

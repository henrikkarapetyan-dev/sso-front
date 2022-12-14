import {BaseModel} from "./BaseModel";

export class AvailableSocialProvidersModel extends BaseModel {
  private _socialId!: string
  private _iconUrl!: string

  get socialId(): string {
    return this._socialId;
  }

  set socialId(value: string) {
    this._socialId = value;
  }

  get iconUrl(): string {
    return this._iconUrl;
  }

  set iconUrl(value: string) {
    this._iconUrl = value;
  }
}

export class ClientModel{
  private _client_id!:string;
  private _authorizationGrantTypes!: string[];
  private _resourceIds!: [];

  get client_id(): string {
    return this._client_id;
  }

  set client_id(value: string) {
    this._client_id = value;
  }

  get authorizationGrantTypes(): string[] {
    return this._authorizationGrantTypes;
  }

  set authorizationGrantTypes(value: string[]) {
    this._authorizationGrantTypes = value;
  }

  get resourceIds(): [] {
    return this._resourceIds;
  }

  set resourceIds(value: []) {
    this._resourceIds = value;
  }
}

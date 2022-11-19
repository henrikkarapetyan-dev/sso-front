import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {

  private _realm!: string;
  private _user_id!: string;
  private _client_id!: string;
  private _show_client_edit_pass_tab!: boolean;
  private _show_client_scopes_tab!: boolean;

  constructor() {
  }

  get realm(): string {
    return this._realm;
  }

  set realm(value: string) {
    this._realm = value;
  }


  get user_id(): string {
    return this._user_id;
  }

  set user_id(value: string) {
    this._user_id = value;
  }


  get client_id(): string {
    return this._client_id;
  }

  set client_id(value: string) {
    this._client_id = value;
  }


  get show_client_edit_pass_tab(): boolean {
    return this._show_client_edit_pass_tab;
  }

  set show_client_edit_pass_tab(value: boolean) {
    this._show_client_edit_pass_tab = value;
  }


  get show_client_scopes_tab(): boolean {
    return this._show_client_scopes_tab;
  }

  set show_client_scopes_tab(value: boolean) {
    this._show_client_scopes_tab = value;
  }
}

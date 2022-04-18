import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {

  private _realm!: string;

  constructor() {
  }

  get realm(): string {
    return this._realm;
  }

  set realm(value: string) {
    this._realm = value;
  }
}

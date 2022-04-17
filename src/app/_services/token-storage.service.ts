import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";

const TOKEN_KEY = environment.token_storage_keyword;
const USER_KEY = environment.user_storage_keyword;

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() {
  }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: any): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getRefreshToken(): string | null {
    const token = window.sessionStorage.getItem(TOKEN_KEY);
    if (token) {
      return JSON.parse(token);
    }
    return null;
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, user);
  }

  public getUser(): string | null {
    return window.sessionStorage.getItem(USER_KEY);
  }
}

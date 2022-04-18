import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TokenModel} from "../_models/token.model";
import {environment} from "../../environments/environment";
import {UserModel} from "../_models/user.model";
import {TokenStorageService} from "./token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  get isLoggedIn(): boolean {
    return !!this.tokenStorageService.getToken();
  }

  get isEmptyUserData(): boolean {
    return !this.tokenStorageService.getUser();
  }

  private currentTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public currentToken: Observable<any> = new Observable<any>();
  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public currentUser: Observable<any> = new Observable<any>();

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) {
    let token = tokenStorageService.getToken();
    let user = tokenStorageService.getUser();
    if (token != null) {
      this.currentTokenSubject = new BehaviorSubject<TokenModel>(JSON.parse(token));
      this.currentToken = this.currentTokenSubject.asObservable();
    }
    if (user != null) {
      this.currentUserSubject = new BehaviorSubject<TokenModel>(JSON.parse(user));
      this.currentUser = this.currentUserSubject.asObservable();
    }
  }

  public get currentTokenValue(): TokenModel {
    return this.currentTokenSubject.value;
  }

  public get currentUserValue(): UserModel {
    return this.currentUserSubject.value
  }


  refreshToken(token: string) {
    const formData = new FormData();
    formData.set('refresh_token', token);
    formData.set("grant_type", 'refresh_token');
    formData.set("client_id", environment.client_id);
    formData.set("client_secret", environment.client_secret);
    return this.http.post(`${environment.apiUrl}/realms/${environment.realm}/token/`, formData
    );
  }

  login(username: string, password: string) {
    const formData = new FormData();
    formData.set("username", username);
    formData.set("password", password);
    formData.set("grant_type", 'password');
    formData.set("client_id", environment.client_id);
    formData.set("client_secret", environment.client_secret);
    return this.http.post<any>(`${environment.apiUrl}/realms/${environment.realm}/token/`, formData)
      .pipe(map(token => {
        this.tokenStorageService.saveToken(JSON.stringify(token));
        this.currentTokenSubject.next(token);
        return token;
      }));
  }

  loadUserInfo() {
    if (this.isLoggedIn) {
      console.log("trying to initialize user info", this.currentUserValue)
      if (this.isEmptyUserData) {
        this.http.get<any>(`${environment.apiUrl}/realms/${environment.realm}/me/`)
          .subscribe(user => {
            console.log("user api call", user)
            this.tokenStorageService.saveUser(JSON.stringify(user))
            this.currentUserSubject.next(user);
            return user
          });
      }
    }
  }

  logout() {
    this.currentTokenSubject.next(null);
    this.currentUserSubject.next(null);
    this.tokenStorageService.signOut();
  }
}

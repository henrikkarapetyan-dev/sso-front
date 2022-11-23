import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {GlobalStateService} from "./global-state.service";
import {PaginatedModel} from "../_models/paginated.model";
import {UserModel} from "../_models/user.model";
import {UserPasswordModel} from "../_models/user-password.model";
import {ClientScopesModel} from "../_models/client-scopes.model";
import {UserRolesModel} from "../_models/user-roles.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private globalStateService: GlobalStateService) {
  }

  getAll(page: number = 1, limit: number = 10) {
    let realm = this.globalStateService.realm;
    const params = new HttpParams()
      .set('page', page)
      .set('limit', limit);
    return this.http.get<PaginatedModel<UserModel[]>>(`${environment.apiUrl}/admin/${realm}/user/list`, {params});
  }

  addNew(data: any) {
    let realm = this.globalStateService.realm;
    return this.http.post<PaginatedModel<UserModel[]>>(`${environment.apiUrl}/admin/${realm}/user`, data);
  }

  getOne(realm: string, user_id: string) {
    return this.http.get<UserModel>(`${environment.apiUrl}/admin/${realm}/user/${user_id}`);
  }

  deleteById(userId: string) {
    let realm = this.globalStateService.realm;
    return this.http.delete<UserModel>(`${environment.apiUrl}/admin/${realm}/user/${userId}`);
  }

  update(realm: string, user_id: string, data:UserModel) {
    return this.http.put<UserModel>(`${environment.apiUrl}/admin/${realm}/user/${user_id}`, data);
  }

  passwordInfo(realm: string, user_id: string) {
    return this.http.get<UserPasswordModel>(`${environment.apiUrl}/admin/${realm}/user/${user_id}/password-info`);
  }

  updatePassword(realm: string, user_id: string, userData: UserPasswordModel) {
    return this.http.put<UserPasswordModel>(`${environment.apiUrl}/admin/${realm}/user/${user_id}/password-info`, userData);
  }

  updateUserRoles(realm: string, client_id: string, userRolesModel: UserRolesModel) {
    return this.http.patch<any>(`${environment.apiUrl}/admin/${realm}/user/${client_id}/roles/`, userRolesModel);
  }

  rolesInfo(realm: string, user_id: string) {
    return this.http.get<UserRolesModel[]>(`${environment.apiUrl}/admin/${realm}/user/${user_id}/roles/`);
  }

  availableRolesInfo(realm: string, user_id: string) {
    return this.http.get<UserRolesModel[]>(`${environment.apiUrl}/admin/${realm}/user/${user_id}/available-roles/`);
  }
}

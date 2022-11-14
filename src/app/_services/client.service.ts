import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {GlobalStateService} from "./global-state.service";
import {PaginatedModel} from "../_models/paginated.model";
import {ClientModel} from "../_models/client.model";
import {ClientPasswordModel} from "../_models/client-password.model";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient, private globalStateService: GlobalStateService) {
  }

  getAll(page: number = 1, limit: number = 10) {
    let realm = this.globalStateService.realm;
    const params = new HttpParams()
      .set('page', page)
      .set('limit', limit);
    return this.http.get<PaginatedModel<ClientModel[]>>(`${environment.apiUrl}/admin/${realm}/client/list`, {params});
  }

  addNew(data: any) {
    let realm = this.globalStateService.realm;
    return this.http.post<PaginatedModel<ClientModel[]>>(`${environment.apiUrl}/admin/${realm}/client`, data);
  }

  getOne(realm: string, user_id: string) {
    return this.http.get<ClientModel>(`${environment.apiUrl}/admin/${realm}/client/${user_id}`);
  }

  deleteById(userId: string) {
    let realm = this.globalStateService.realm;
    return this.http.delete<ClientModel>(`${environment.apiUrl}/admin/${realm}/client/${userId}`);
  }

  update(realm: string, user_id: string, data: ClientModel) {
    return this.http.put<ClientModel>(`${environment.apiUrl}/admin/${realm}/client/${user_id}`, data);
  }

  passwordInfo(realm: string, user_id: string) {
    return this.http.get<ClientPasswordModel>(`${environment.apiUrl}/admin/${realm}/client/${user_id}/password-info`);
  }

  updatePassword(realm: string, user_id: string, userData: ClientPasswordModel) {
    return this.http.put<ClientPasswordModel>(`${environment.apiUrl}/admin/${realm}/client/${user_id}/password-info`, userData);
  }
}

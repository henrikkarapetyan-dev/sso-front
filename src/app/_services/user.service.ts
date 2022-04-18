import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {GlobalStateService} from "./global-state.service";
import {PaginatedModel} from "../_models/paginated.model";
import {ClientModel} from "../_models/client.model";

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
    return this.http.get<PaginatedModel<ClientModel[]>>(`${environment.apiUrl}/admin/${realm}/user/list`, {params});
  }

  addNew(data:any) {
    let realm = this.globalStateService.realm;
    return this.http.post<PaginatedModel<ClientModel[]>>(`${environment.apiUrl}/admin/${realm}/user`, data);
  }
}
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {PaginatedModel} from "../_models/paginated.model";
import {environment} from "../../environments/environment";
import {RoleModel} from "../_models/role.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  constructor(private http: HttpClient) {
  }

  getAll(page: number = 1, limit: number = 10) {
    const params = new HttpParams()
      .set('page', page)
      .set('limit', limit);
    return this.http.get<PaginatedModel<RoleModel[]>>(`${environment.apiUrl}/admin/role/list`, {params});
  }

  addNew(name: string) {
    var headers = new HttpHeaders({'Content-Type': 'application/json'});
    var data = JSON.stringify({
      "name": name
    });
    return this.http.post<RoleModel>(`${environment.apiUrl}/admin/role/`, data, {headers: headers});
  }

  delete(roleId: any) {
    return this.http.delete<any[]>(`${environment.apiUrl}/admin/role/${roleId}`);
  }
}

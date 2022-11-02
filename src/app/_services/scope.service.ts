import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {PaginatedModel} from "../_models/paginated.model";
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";
import {ScopeModel} from "../_models/scope.model";

@Injectable({
  providedIn: 'root'
})
export class ScopeService {
  constructor(private http: HttpClient) {
  }

  getAll(page: number = 1, limit: number = 10) {
    const params = new HttpParams()
      .set('page', page)
      .set('limit', limit);
    return this.http.get<PaginatedModel<ScopeModel[]>>(`${environment.apiUrl}/admin/scope/list`, {params});
  }

  addNew(name: string) {
    var headers = new HttpHeaders({'Content-Type': 'application/json'});
    var data = JSON.stringify({
      "name": name
    });
    return this.http.post<ScopeModel>(`${environment.apiUrl}/admin/scope/`, data, {headers: headers});
  }

  delete(scopeId: any) {
    return this.http.delete<any[]>(`${environment.apiUrl}/admin/scope/${scopeId}`);
  }
}

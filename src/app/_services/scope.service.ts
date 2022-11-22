import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {PaginatedModel} from "../_models/paginated.model";
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";
import {ScopeModel} from "../_models/scope.model";
import {GlobalStateService} from "./global-state.service";

@Injectable({
  providedIn: 'root'
})
export class ScopeService {
  constructor(private http: HttpClient, private globalStateService: GlobalStateService) {
  }

  getAll(page: number = 1, limit: number = 10) {
    let realm = this.globalStateService.realm
    const params = new HttpParams()
      .set('page', page)
      .set('limit', limit);
    return this.http.get<PaginatedModel<ScopeModel[]>>(`${environment.apiUrl}/admin/${realm}/scope/list`, {params});
  }

  addNew(name: string) {
    let realm = this.globalStateService.realm
    var headers = new HttpHeaders({'Content-Type': 'application/json'});
    var data = JSON.stringify({
      "name": name
    });
    return this.http.post<ScopeModel>(`${environment.apiUrl}/admin/${realm}/scope/`, data, {headers: headers});
  }

  delete(scopeId: any) {
    let realm = this.globalStateService.realm
    return this.http.delete<any[]>(`${environment.apiUrl}/admin/${realm}/scope/${scopeId}`);
  }
}

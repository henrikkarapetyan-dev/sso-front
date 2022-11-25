import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {PaginatedModel} from "../_models/paginated.model";
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";
import {GlobalStateService} from "./global-state.service";
import {ResourceModel} from "../_models/resource.model";

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  constructor(private http: HttpClient, private globalStateService: GlobalStateService) {
  }

  getAll(page: number = 1, limit: number = 10) {
    let realm = this.globalStateService.realm
    const params = new HttpParams()
      .set('page', page)
      .set('limit', limit);
    return this.http.get<PaginatedModel<ResourceModel[]>>(`${environment.apiUrl}/admin/${realm}/resource/list`, {params});
  }

  addNew(resourceId: string) {
    let realm = this.globalStateService.realm
    var headers = new HttpHeaders({'Content-Type': 'application/json'});
    var data = JSON.stringify({
      "resourceId": resourceId
    });
    return this.http.post<ResourceModel>(`${environment.apiUrl}/admin/${realm}/resource/`, data, {headers: headers});
  }

  delete(scopeId: any) {
    let realm = this.globalStateService.realm
    return this.http.delete<any[]>(`${environment.apiUrl}/admin/${realm}/resource/${scopeId}`);
  }

}

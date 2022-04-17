import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {RealmModel} from "../../_models/realm.model";
import {environment} from "../../../environments/environment";
import {PaginatedModel} from "../../_models/paginated.model";

@Injectable({
  providedIn: 'root'
})
export class RealmService {

  constructor(private http: HttpClient) {
  }

  getAll(page: number = 1, limit: number = 10) {
    const params = new HttpParams()
      .set('page', page)
      .set('limit', limit);
    return this.http.get<PaginatedModel<RealmModel[]>>(`${environment.apiUrl}/admin/realm/list`, {params});
  }

  addNew(name: string) {
    var headers = new HttpHeaders({'Content-Type': 'application/json'});

    var data = JSON.stringify({
      "name": name
    });
    return this.http.post<RealmModel>(`${environment.apiUrl}/admin/realm/`, data, {headers: headers});
  }

  delete(realmId: any) {
    return this.http.delete<any[]>(`${environment.apiUrl}/admin/realm/${realmId}`);
  }
}

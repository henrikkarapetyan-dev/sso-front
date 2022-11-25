import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";
import {RedirectUriModel} from "../_models/redirect-uri.model";

@Injectable({
  providedIn: 'root'
})
export class RedirectUriService {
  constructor(private http: HttpClient) {
  }

  getAll(realm: string, client_id: string) {
    return this.http.get<RedirectUriModel[]>(`${environment.apiUrl}/admin/${realm}/${client_id}/redirect-uri/list`);
  }

  addNew(realm: string, client_id: string, uri: string) {
    var headers = new HttpHeaders({'Content-Type': 'application/json'});
    var data = JSON.stringify({
      "uri": uri
    });
    return this.http.post<RedirectUriModel>(`${environment.apiUrl}/admin/${realm}/${client_id}/redirect-uri/`, data, {headers: headers});
  }

  delete(realm: string, client_id: string, id: string) {
    return this.http.delete<any[]>(`${environment.apiUrl}/admin/${realm}/${client_id}/redirect-uri/${id}`);
  }
}

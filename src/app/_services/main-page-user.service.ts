import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {GlobalStateService} from "./global-state.service";
import {PaginatedModel} from "../_models/paginated.model";
import {ClientModel} from "../_models/client.model";

@Injectable({
  providedIn: 'root'
})
export class MainPageUserService {

  constructor(private http: HttpClient) {
  }

  getAll(page: number = 1, limit: number = 10) {
    const params = new HttpParams()
      .set('page', page)
      .set('limit', limit);
    return this.http.get<PaginatedModel<ClientModel[]>>(`${environment.apiUrl}/admin/user/list`, {params});
  }
}

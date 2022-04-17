import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {PaginatedModel} from "../../_models/paginated.model";
import {ClientModel} from "../../_models/client.model";
import {GlobalStateService} from "../global-state.service";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient, private globalStateService: GlobalStateService) {
  }

  getAll(page: number = 1, limit: number = 10) {
  let realm = this.globalStateService.realm;
    const params = new HttpParams()
      .set('page', page)
      .set('limit', limit);
    return this.http.get<PaginatedModel<ClientModel[]>>(`${environment.apiUrl}/admin/client/${realm}/list`, {params});
  }
}

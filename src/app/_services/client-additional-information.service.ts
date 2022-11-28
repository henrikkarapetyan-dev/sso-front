import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {GlobalStateService} from "./global-state.service";
import {PaginatedModel} from "../_models/paginated.model";
import {environment} from "../../environments/environment";
import {ClientAdditionalInformationModel} from "../_models/client-additional-information.model";

@Injectable({
  providedIn: 'root'
})
export class ClientAdditionalInformationService {
  constructor(private http: HttpClient, private globalStateService: GlobalStateService) {
  }

  getAll(page: number = 1, limit: number = 10) {
    let client_id = this.globalStateService.client_id;
    let realm = this.globalStateService.realm;
    const params = new HttpParams()
      .set('page', page)
      .set('limit', limit);
    return this.http.get<PaginatedModel<ClientAdditionalInformationModel[]>>(`${environment.apiUrl}/admin/${realm}/client/${client_id}/additional-information/list`, {params});
  }

  addNew(data: any) {
    let client_id = this.globalStateService.client_id;
    let realm = this.globalStateService.realm;
    return this.http.post<PaginatedModel<ClientAdditionalInformationModel[]>>(`${environment.apiUrl}/admin/${realm}/client/${client_id}/additional-information/`, data,);
  }


  deleteById(id: string) {
    let client_id = this.globalStateService.client_id;
    let realm = this.globalStateService.realm;
    return this.http.delete<ClientAdditionalInformationModel>(`${environment.apiUrl}/admin/${realm}/client/${client_id}/additional-information/${id}`);
  }
}

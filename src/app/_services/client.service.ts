import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {GlobalStateService} from "./global-state.service";
import {PaginatedModel} from "../_models/paginated.model";
import {ClientModel} from "../_models/client.model";
import {ClientSecretModel} from "../_models/client-secret.model";
import {ClientMainInfoEditModel} from "../_models/client-main-info-edit.model";
import {ClientScopesModel} from "../_models/client-scopes.model";
import {ClientAuthorizationGrantTypeModel} from "../_models/client-authorization-grant-type.model";
import {ClientResourcesModel} from "../_models/client-resources.model";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient, private globalStateService: GlobalStateService) {
  }

  getAll(page: number = 1, limit: number = 10) {
    let realm = this.globalStateService.realm;
    const params = new HttpParams()
      .set('page', page)
      .set('limit', limit);
    return this.http.get<PaginatedModel<ClientModel[]>>(`${environment.apiUrl}/admin/${realm}/client/list`, {params});
  }

  addNew(data: any) {
    let realm = this.globalStateService.realm;
    return this.http.post<PaginatedModel<ClientModel[]>>(`${environment.apiUrl}/admin/${realm}/client`, data);
  }

  getOne(realm: string, client_id: string) {
    return this.http.get<ClientModel>(`${environment.apiUrl}/admin/${realm}/client/${client_id}`);
  }

  deleteById(userId: string) {
    let realm = this.globalStateService.realm;
    return this.http.delete<ClientModel>(`${environment.apiUrl}/admin/${realm}/client/${userId}`);
  }

  update(realm: string, client_id: string, data: ClientModel) {
    return this.http.put<ClientModel>(`${environment.apiUrl}/admin/${realm}/client/${client_id}`, data);
  }

  passwordInfo(realm: string, client_id: string) {
    return this.http.get<ClientSecretModel>(`${environment.apiUrl}/admin/${realm}/client/${client_id}/secret-info/`);
  }

  updatePassword(realm: string, client_id: string, clientData: ClientSecretModel) {
    return this.http.patch<ClientSecretModel>(`${environment.apiUrl}/admin/${realm}/client/${client_id}/secret-info/`, clientData);
  }

  getClientMainInfo(realm: string, client_id: string) {
    return this.http.get<ClientMainInfoEditModel>(`${environment.apiUrl}/admin/${realm}/client/${client_id}/main-info/`);
  }

  updateClientMainInfo(realm: string, client_id: string, clientData: ClientMainInfoEditModel) {
    return this.http.patch<ClientMainInfoEditModel>(`${environment.apiUrl}/admin/${realm}/client/${client_id}/main-info/`, clientData);
  }

  updateClientScopes(realm: string, client_id: string, clientScopesData: ClientScopesModel) {
    return this.http.patch<any>(`${environment.apiUrl}/admin/${realm}/client/${client_id}/scopes/`, clientScopesData);
  }

  scopesInfo(realm: string, client_id: string) {
    return this.http.get<ClientScopesModel[]>(`${environment.apiUrl}/admin/${realm}/client/${client_id}/scopes/`);
  }

  availableScopesInfo(realm: string, client_id: string) {
    return this.http.get<ClientScopesModel[]>(`${environment.apiUrl}/admin/${realm}/client/${client_id}/available-scopes/`);
  }

  grantTypesInfo(realm: string, client_id: string) {
    return this.http.get<ClientAuthorizationGrantTypeModel[]>(`${environment.apiUrl}/admin/${realm}/client/${client_id}/grant-types/`);
  }

  availableGrantTypesInfo(realm: string, client_id: string) {
    return this.http.get<ClientAuthorizationGrantTypeModel[]>(`${environment.apiUrl}/admin/${realm}/client/${client_id}/available-grant-types/`);
  }

  updateClientGrantTypes(realm: string, client_id: string, clientAuthorizationGrantTypeModel: ClientAuthorizationGrantTypeModel) {
    return this.http.patch<any>(`${environment.apiUrl}/admin/${realm}/client/${client_id}/grant-types/`, clientAuthorizationGrantTypeModel);
  }


  updateClientResources(realm: string, client_id: string, clientResourcesModel: ClientResourcesModel) {
    return this.http.patch<any>(`${environment.apiUrl}/admin/${realm}/client/${client_id}/resources/`, clientResourcesModel);
  }

  resourcesInfo(realm: string, client_id: string) {
    return this.http.get<ClientResourcesModel[]>(`${environment.apiUrl}/admin/${realm}/client/${client_id}/resources/`);
  }

  availableResourcesInfo(realm: string, client_id: string) {
    return this.http.get<ClientResourcesModel[]>(`${environment.apiUrl}/admin/${realm}/client/${client_id}/available-resources/`);
  }

}

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {GlobalStateService} from "./global-state.service";
import {environment} from "../../environments/environment";
import {RealmSocialNetworkModel} from "../_models/realm-social-network.model";
import {AvailableSocialProvidersModel} from "../_models/available-social-providers.model";

@Injectable({
  providedIn: 'root'
})
export class RealmSocialNetworksService {
  constructor(private http: HttpClient, private globalStateService: GlobalStateService) {
  }

  getAll() {
    let realm = this.globalStateService.realm;
    return this.http.get<RealmSocialNetworkModel[]>(`${environment.apiUrl}/realms/${realm}/social-network/list`);
  }

  getOne(social_id: string) {
    let realm = this.globalStateService.realm;
    return this.http.get<RealmSocialNetworkModel>(`${environment.apiUrl}/realms/${realm}/social-network/${social_id}`);
  }

  edit(realm: string, social_id: string, data: RealmSocialNetworkModel) {
    return this.http.put<RealmSocialNetworkModel>(`${environment.apiUrl}/realms/${realm}/social-network/${social_id}`, data);
  }

  addNew(realm: string, social_id: string, data: RealmSocialNetworkModel) {
    return this.http.post<RealmSocialNetworkModel>(`${environment.apiUrl}/realms/${realm}/social-network/${social_id}`, data);
  }

  delete(realm: string, social_id: string) {
    return this.http.delete<RealmSocialNetworkModel>(`${environment.apiUrl}/realms/${realm}/social-network/${social_id}`);
  }

  getNotConfiguredProviders(realm: string) {
    return this.http.get<AvailableSocialProvidersModel[]>(`${environment.apiUrl}/realms/${realm}/social-network/list/not-configured`);
  }
}

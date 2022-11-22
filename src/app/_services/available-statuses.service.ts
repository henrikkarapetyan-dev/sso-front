import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";
import {AvailableStatusesModel} from "../_models/available-statuses.model";

@Injectable({
  providedIn: 'root'
})
export class AvailableStatusesService {

  constructor(private http: HttpClient) {
  }

  getAll() {
   return  this.http.get<AvailableStatusesModel[]>(`${environment.apiUrl}/realms/status/`);
  }

}

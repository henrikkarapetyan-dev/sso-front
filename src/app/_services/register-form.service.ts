import {environment} from "../../environments/environment";
import {RegisterFormModel} from "../_models/register-form.model";
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegisterFormService {


  constructor(private http: HttpClient) {
  }

  addNew(data: RegisterFormModel, session_id:string,realm: string, social_id: string) {
    const headers= new HttpHeaders().set('session_id', session_id)
    return this.http.post<RegisterFormModel>(`${environment.apiUrl}/realms/${realm}/social-network-register/${social_id}/confirm`, data,{headers:headers});
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {ClientSecretModel} from "../../../../../../_models/client-secret.model";
import {ClientService} from "../../../../../../_services/client.service";
import {ClientScopesModel} from "../../../../../../_models/client-scopes.model";

@Component({
  selector: 'app-client-redirect-uris',
  templateUrl: './client-redirect-uris.component.html',
  styleUrls: ['./client-redirect-uris.component.scss']
})
export class ClientRedirectUrisComponent implements OnInit {

  @Input() client_id!: string;
  @Input() realm!: string;
  clientScopesData!: ClientScopesModel;

  constructor(private clientService: ClientService) {
  }

  ngOnInit(): void {
    // this.clientService.scopesInfo(this.realm, this.client_id).subscribe(data => {
    //   this.clientScopesData = data;
    // });
  }

  // updateClientScopes() {
  //   this.clientService.updateClientScopes(this.realm, this.client_id, this.clientScopesData).subscribe(data => {
  //     this.clientScopesData = data;
  //     console.log(data)
  //   });
  // }
}

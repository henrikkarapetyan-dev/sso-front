import {Component, Input, OnInit} from '@angular/core';
import {DragulaService} from "ng2-dragula";
import {ClientAuthorizationGrantTypeModel} from "../../../../../_models/client-authorization-grant-type.model";
import {ClientService} from "../../../../../_services/client.service";

@Component({
  selector: 'app-client-grand-authorities',
  templateUrl: './client-grand-authorities.component.html',
  styleUrls: ['./client-grand-authorities.component.scss']
})
export class ClientGrandAuthoritiesComponent implements OnInit {
  @Input() client_id!: string;
  @Input() realm!: string;
  clientScopesData!: ClientAuthorizationGrantTypeModel[];
  clientAvailableScopes!:ClientAuthorizationGrantTypeModel[];
  groupName = "authorities"
  constructor(private clientService: ClientService, private dragulaService: DragulaService) {
    let group = this.dragulaService.find(this.groupName);
    if (!group) {

      this.dragulaService.createGroup(this.groupName, {
        // ...
      });

      this.dragulaService.dropModel(this.groupName).subscribe(args => {
        this.clientService.updateClientGrantTypes(this.realm, this.client_id, args.item).subscribe(data => {});
      });
    }

  }

  ngOnInit(): void {
    this.clientService.grantTypesInfo(this.realm, this.client_id)
      .subscribe(
        data => {
          this.clientScopesData = data;
        }
      );

    this.clientService.availableGrantTypesInfo(this.realm, this.client_id)
      .subscribe(
        data => {
          this.clientAvailableScopes = data;
        }
      );

  }

}

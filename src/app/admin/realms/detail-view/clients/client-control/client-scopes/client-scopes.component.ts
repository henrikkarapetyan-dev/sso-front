import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ClientService} from "../../../../../../_services/client.service";
import {ClientScopesModel} from "../../../../../../_models/client-scopes.model";
import {DragulaService} from "ng2-dragula";

@Component({
  selector: 'app-client-scopes',
  templateUrl: './client-scopes.component.html',
  styleUrls: ['./client-scopes.component.scss']
})
export class ClientScopesComponent implements OnInit, OnDestroy {

  @Input() client_id!: string;
  @Input() realm!: string;
  clientScopesData!: ClientScopesModel[];
  clientAvailableScopes!:ClientScopesModel[];
  groupName = "scopes"
  constructor(private clientService: ClientService, private dragulaService: DragulaService) {
    this.dragulaService.remove(this.groupName)
    let group = this.dragulaService.find(this.groupName);
    if (!group) {

      this.dragulaService.createGroup(this.groupName, {
        // ...
      });

      this.dragulaService.dropModel(this.groupName).subscribe(args => {
          this.clientService.updateClientScopes(this.realm, this.client_id, args.item).subscribe(data => {
            console.log(data)
          });
      });
    }

  }

  ngOnInit(): void {
    this.clientService.scopesInfo(this.realm, this.client_id)
      .subscribe(
        data => {
          this.clientScopesData = data;
          console.log(data)
        }
      );

    this.clientService.availableScopesInfo(this.realm, this.client_id)
      .subscribe(
        data => {
          this.clientAvailableScopes = data;
          console.log(data)
        }
      );

  }
  ngOnDestroy() {
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {ClientService} from "../../../../../../_services/client.service";
import {DragulaService} from "ng2-dragula";
import {ClientResourcesModel} from "../../../../../../_models/client-resources.model";

@Component({
  selector: 'app-client-resources',
  templateUrl: './client-resources.component.html',
  styleUrls: ['./client-resources.component.scss']
})
export class ClientResourcesComponent implements OnInit {

  @Input() client_id!: string;
  @Input() realm!: string;
  clientResourcesData!: ClientResourcesModel[];
  clientAvailableResourcesData!: ClientResourcesModel[];
  groupName = "resources"

  constructor(private clientService: ClientService, private dragulaService: DragulaService) {
    this.dragulaService.remove(this.groupName)
    let group = this.dragulaService.find(this.groupName);
    if (!group) {

      this.dragulaService.createGroup(this.groupName, {
        // ...
      });

      this.dragulaService.dropModel(this.groupName).subscribe(args => {
        this.clientService.updateClientResources(this.realm, this.client_id, args.item).subscribe(data => {
        });
      });
    }

  }

  ngOnInit(): void {
    this.clientService.resourcesInfo(this.realm, this.client_id)
      .subscribe(
        data => {
          this.clientResourcesData = data;
        }
      );

    this.clientService.availableResourcesInfo(this.realm, this.client_id)
      .subscribe(
        data => {
          this.clientAvailableResourcesData = data;
        }
      );

  }
}

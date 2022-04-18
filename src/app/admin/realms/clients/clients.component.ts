import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {ClientModel} from "../../../_models/client.model";
import {ClientsService} from "../../../_services/admin/clients.service";
import {GlobalStateService} from "../../../_services/global-state.service";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  private subscription: Subscription;
  public model_data!: ClientModel[];

  constructor(
    private activateRoute: ActivatedRoute,
    public clientService: ClientsService,
    private globalStateService: GlobalStateService
  ) {
    this.subscription = activateRoute.params.subscribe(params => {
      this.globalStateService.realm = params['realm']
    });
  }


  ngOnInit(): void {
  }

  onSort($event: any) {

  }

  edit(realmId: any) {

  }

  delete(realmId: any) {

  }

  openClientPage(realmId: any) {

  }

  setModelData($event: any[]) {
    this.model_data = $event
  }
}

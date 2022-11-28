import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {ClientsService} from "../../../../../_services/admin/clients.service";
import {GlobalStateService} from "../../../../../_services/global-state.service";
import {ClientModel} from "../../../../../_models/client.model";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  private subscription: Subscription;
  public model_data!: ClientModel[];
  realm!: string;

  constructor(
    private router:Router,
    private activateRoute: ActivatedRoute,
    public clientService: ClientsService,
    private globalStateService: GlobalStateService
  ) {
    this.subscription = activateRoute.params.subscribe(params => {
      this.globalStateService.realm = params['realm'];
      this.realm = globalStateService.realm;
    });
  }


  ngOnInit(): void {
  }

  onSort($event: any) {

  }

  edit(uuid: any) {
    this.router.navigate(["/admin/" + this.globalStateService.realm + "/client-control"+uuid+"/detail-view/"]);
  }

  delete(uuid: any) {
    this.clientService.delete(uuid).subscribe(data=>{
      window.location.reload();
    });
  }

  setModelData($event: any[]) {
    this.model_data = $event
  }
}

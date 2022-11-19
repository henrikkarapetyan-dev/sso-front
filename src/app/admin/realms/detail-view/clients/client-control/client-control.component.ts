import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {GlobalStateService} from "../../../../../_services/global-state.service";
import {FormBuilder} from "@angular/forms";
import {ClientService} from "../../../../../_services/client.service";

@Component({
  selector: 'app-client-control',
  templateUrl: './client-control.component.html',
  styleUrls: ['./client-control.component.scss']
})
export class ClientControlComponent implements OnInit {

  private subscription: Subscription;
  public client_id!: string;
  public realm!: string;
  active: any;
  public show_pass_edit_tab!: boolean;

  constructor(
    private activateRoute: ActivatedRoute,
    private clientService: ClientService,
    public globalStateService: GlobalStateService,
    private fb: FormBuilder
  ) {
    this.subscription = activateRoute.params.subscribe(params => {
      this.globalStateService.realm = params['realm']
      this.globalStateService.client_id = params['id']
      this.globalStateService.show_client_edit_pass_tab = false;
      this.show_pass_edit_tab = this.globalStateService.show_client_edit_pass_tab;
      this.realm = this.globalStateService.realm;
      this.client_id = this.globalStateService.client_id;
    });
  }

  ngOnInit(): void {
  }

}

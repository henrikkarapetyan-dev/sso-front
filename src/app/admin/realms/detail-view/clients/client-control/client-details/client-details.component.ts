import {Component, Input, OnInit} from '@angular/core';
import {ClientService} from "../../../../../../_services/client.service";
import {ClientMainInfoEditModel} from "../../../../../../_models/client-main-info-edit.model";
import {GlobalStateService} from "../../../../../../_services/global-state.service";

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {


  @Input() client_id!: string;
  @Input() realm!: string;
  clientModelMainInfo!: ClientMainInfoEditModel;

  constructor(private clientService: ClientService, private globalStateService: GlobalStateService) {
  }

  ngOnInit(): void {
    this.clientService.getClientMainInfo(this.realm, this.client_id).subscribe(data => {
      this.clientModelMainInfo = data;
      if (this.clientModelMainInfo){
        this.globalStateService.show_client_edit_pass_tab = this.clientModelMainInfo.secretRequired;
        this.globalStateService.show_client_scopes_tab = this.clientModelMainInfo.scoped;
      }
    });
  }

  updateClientInfo() {
    this.clientService.updateClientMainInfo(this.realm, this.client_id, this.clientModelMainInfo).subscribe(data => {
      this.clientModelMainInfo = data;
      if (this.clientModelMainInfo){
        this.globalStateService.show_client_edit_pass_tab = this.clientModelMainInfo.secretRequired;
        this.globalStateService.show_client_scopes_tab = this.clientModelMainInfo.scoped;
      }
    });
  }

}

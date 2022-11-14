import {Component, Input, OnInit} from '@angular/core';
import {ClientModel} from "../../../../../../_models/client.model";
import {ClientService} from "../../../../../../_services/client.service";

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {


  @Input() client_id!: string;
  @Input() realm!: string;
  clientData!: ClientModel;

  constructor(private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.clientService.getOne(this.realm, this.client_id).subscribe(data => {
      this.clientData = data;
    });
  }

  updateClientInfo() {
    this.clientService.update(this.realm, this.client_id, this.clientData).subscribe(data => {
      this.clientData = data;
    });
  }

}

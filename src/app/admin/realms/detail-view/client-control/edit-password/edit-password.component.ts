import {Component, Input, OnInit} from '@angular/core';
import {ClientService} from "../../../../../_services/client.service";
import {ClientSecretModel} from "../../../../../_models/client-secret.model";


@Component({
  selector: 'app-edit-client-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.scss']
})
export class EditPasswordComponent implements OnInit {

  @Input() client_id!: string;
  @Input() realm!: string;
  clientSecretData!: ClientSecretModel;

  constructor(private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.clientService.passwordInfo(this.realm, this.client_id).subscribe(data => {
      this.clientSecretData = data;
    });
  }

  updateClientSecretInfo() {
    this.clientService.updatePassword(this.realm, this.client_id, this.clientSecretData).subscribe(data => {
      this.clientSecretData = data;
    });
  }
}

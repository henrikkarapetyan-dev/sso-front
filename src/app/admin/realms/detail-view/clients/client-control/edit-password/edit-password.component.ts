import {Component, Input, OnInit} from '@angular/core';
import {ClientService} from "../../../../../../_services/client.service";
import {ClientPasswordModel} from "../../../../../../_models/client-password.model";

@Component({
  selector: 'app-edit-client-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.scss']
})
export class EditPasswordComponent implements OnInit {

  @Input() client_id!: string;
  @Input() realm!: string;
  clientData!: ClientPasswordModel;

  constructor(private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.clientService.passwordInfo(this.realm, this.client_id).subscribe(data => {
      this.clientData = data;
    });
  }

  updateUserInfo() {
    console.log(this.clientData)
    this.clientService.updatePassword(this.realm, this.client_id, this.clientData).subscribe(data => {
      this.clientData = data;
      console.log(data)
    });
  }
}

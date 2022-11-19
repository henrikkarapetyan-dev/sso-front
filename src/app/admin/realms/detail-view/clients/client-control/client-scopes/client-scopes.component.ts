import {Component, Input, OnInit} from '@angular/core';
import {ClientSecretModel} from "../../../../../../_models/client-secret.model";
import {ClientService} from "../../../../../../_services/client.service";

@Component({
  selector: 'app-client-scopes',
  templateUrl: './client-scopes.component.html',
  styleUrls: ['./client-scopes.component.scss']
})
export class ClientScopesComponent implements OnInit {
  @Input() client_id!: string;
  @Input() realm!: string;
  ngOnInit(): void {
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientControlRoutingModule } from './client-control-routing.module';
import {ClientAddComponent} from "./client-add/client-add.component";
import {ClientDetailsComponent} from "./client-details/client-details.component";
import {ClientGrandAuthoritiesComponent} from "./client-grand-authorities/client-grand-authorities.component";
import {ClientsComponent} from "./client-list/clients.component";
import {ClientRedirectUrisComponent} from "./client-redirect-uris/client-redirect-uris.component";
import {ClientResourcesComponent} from "./client-resources/client-resources.component";
import {ClientScopesComponent} from "./client-scopes/client-scopes.component";
import {EditClientAttributesComponent} from "./edit-client-attributes/edit-client-attributes.component";
import {EditPasswordComponent} from "./edit-password/edit-password.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SharedModuleModule} from "../../../shared-module/shared-module.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DragulaModule} from "ng2-dragula";


@NgModule({
  declarations: [
    ClientAddComponent,
    ClientDetailsComponent,
    ClientGrandAuthoritiesComponent,
    ClientsComponent,
    ClientRedirectUrisComponent,
    ClientResourcesComponent,
    ClientScopesComponent,
    EditClientAttributesComponent,
    EditPasswordComponent
  ],
  exports:[
    ClientAddComponent,
    ClientDetailsComponent,
    ClientGrandAuthoritiesComponent,
    ClientsComponent,
    ClientRedirectUrisComponent,
    ClientResourcesComponent,
    ClientScopesComponent,
    EditClientAttributesComponent,
    EditPasswordComponent
  ],
  imports: [
    CommonModule,
    DragulaModule.forRoot(),
    SharedModuleModule,
    ClientControlRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ClientControlModule { }

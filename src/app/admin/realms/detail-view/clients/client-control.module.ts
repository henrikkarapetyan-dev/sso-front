import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditPasswordComponent} from "./client-control/edit-password/edit-password.component";
import {ClientDetailsComponent} from "./client-control/client-details/client-details.component";
import {EditClientAttributesComponent} from './client-control/edit-client-attributes/edit-client-attributes.component';
import {ClientScopesComponent} from './client-control/client-scopes/client-scopes.component';
import {ClientRedirectUrisComponent} from './client-control/client-redirect-uris/client-redirect-uris.component';
import {DragulaModule} from "ng2-dragula";


@NgModule({
  declarations: [
    ClientDetailsComponent,
    EditPasswordComponent,
    EditClientAttributesComponent,
    ClientScopesComponent,
    ClientRedirectUrisComponent
  ],
  exports: [
    ClientDetailsComponent,
    EditPasswordComponent,
    EditClientAttributesComponent,
    ClientScopesComponent,
    ClientRedirectUrisComponent
  ],
  imports: [
    CommonModule,
    DragulaModule.forRoot()
  ]
})
export class ClientControlModule {
}

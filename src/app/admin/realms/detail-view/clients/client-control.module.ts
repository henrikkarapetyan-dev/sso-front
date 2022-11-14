import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditPasswordComponent} from "./client-control/edit-password/edit-password.component";
import {ClientDetailsComponent} from "./client-control/client-details/client-details.component";
import {EditClientAttributesComponent} from './client-control/edit-client-attributes/edit-client-attributes.component';


@NgModule({
  declarations: [
    ClientDetailsComponent,
    EditPasswordComponent,
    EditClientAttributesComponent
  ],
  exports: [
    ClientDetailsComponent,
    EditPasswordComponent,
    EditClientAttributesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientControlModule {
}

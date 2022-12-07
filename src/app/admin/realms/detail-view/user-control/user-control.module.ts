import {NgModule} from '@angular/core';
import {UserDetailsComponent} from './user-details/user-details.component';
import {EditPasswordComponent} from './edit-password/edit-password.component';
import {EditUserAttributesComponent} from './edit-user-attributes/edit-user-attributes.component';
import {UserRolesComponent} from './user-roles/user-roles.component';
import {DragulaModule} from "ng2-dragula";
import {CommonModule} from "@angular/common";
import {ClientControlRoutingModule} from "../client-control/client-control-routing.module";


@NgModule({
  declarations: [
    UserDetailsComponent,
    EditPasswordComponent,
    EditUserAttributesComponent,
    UserRolesComponent
  ],
  exports: [
    EditPasswordComponent,
    UserDetailsComponent,
    EditUserAttributesComponent,
    UserRolesComponent
  ],
  imports: [
    CommonModule,
    DragulaModule.forRoot(),
    ClientControlRoutingModule
  ]
})
export class UserControlModule {
}

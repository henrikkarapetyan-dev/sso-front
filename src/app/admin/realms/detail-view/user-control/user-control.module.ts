import {NgModule} from '@angular/core';
import {UserDetailsComponent} from './user-details/user-details.component';
import {EditPasswordComponent} from './edit-password/edit-password.component';
import {EditUserAttributesComponent} from './edit-user-attributes/edit-user-attributes.component';
import {UserRolesComponent} from './user-roles/user-roles.component';
import {DragulaModule} from "ng2-dragula";
import {CommonModule} from "@angular/common";


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
    DragulaModule.forRoot()
  ]
})
export class UserControlModule {
}

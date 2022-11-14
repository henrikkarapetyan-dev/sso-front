import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { EditUserAttributesComponent } from './edit-user-attributes/edit-user-attributes.component';



@NgModule({
  declarations: [
    UserDetailsComponent,
    EditPasswordComponent,
    EditUserAttributesComponent
  ],
  exports: [
    EditPasswordComponent,
    UserDetailsComponent,
    EditUserAttributesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserControlModule { }

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailsComponent} from "./user-details/user-details.component";
import {EditUserAttributesComponent} from "./edit-user-attributes/edit-user-attributes.component";
import {EditPasswordComponent} from "./edit-password/edit-password.component";
import {UserRolesComponent} from "./user-roles/user-roles.component";

const routes: Routes = [
  {path: '', component: UserDetailsComponent},
  {path: 'edit-password', component: EditPasswordComponent},
  {path: 'edit-user-attributes', component: EditUserAttributesComponent},
  {path: 'edit-user-roles', component: UserRolesComponent},
  {path: '*', redirectTo:"/not-found"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserControlRoutingModule {
}

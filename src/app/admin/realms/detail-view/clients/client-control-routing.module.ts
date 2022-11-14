import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditPasswordComponent} from "./client-control/edit-password/edit-password.component";
import {ClientDetailsComponent} from "./client-control/client-details/client-details.component";
import {EditClientAttributesComponent} from "./client-control/edit-client-attributes/edit-client-attributes.component";

const routes: Routes = [
  {path: '', component: ClientDetailsComponent},
  {path: 'edit-password', component: EditPasswordComponent},
  {path: 'edit-user-attributes', component: EditClientAttributesComponent},
  {path: '*', redirectTo:"/not-found"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientControlRoutingModule {
}

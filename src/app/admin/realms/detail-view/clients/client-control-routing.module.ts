import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditPasswordComponent} from "./client-control/edit-password/edit-password.component";
import {ClientDetailsComponent} from "./client-control/client-details/client-details.component";
import {EditClientAttributesComponent} from "./client-control/edit-client-attributes/edit-client-attributes.component";
import {ClientScopesComponent} from "./client-control/client-scopes/client-scopes.component";
import {ClientRedirectUrisComponent} from "./client-control/client-redirect-uris/client-redirect-uris.component";
import {
  ClientGrandAuthoritiesComponent
} from "./client-control/client-grand-authorities/client-grand-authorities.component";

const routes: Routes = [
  {path: '', component: ClientDetailsComponent},
  {path: 'edit-password', component: EditPasswordComponent},
  {path: 'edit-scopes', component: ClientScopesComponent},
  {path: 'edit-client-attributes', component: EditClientAttributesComponent},
  {path: 'edit-client-redirect-uris', component: ClientRedirectUrisComponent},
  {path: 'edit-client-granted-authorities', component: ClientGrandAuthoritiesComponent},
  {path: '*', redirectTo: "/not-found"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientControlRoutingModule {
}

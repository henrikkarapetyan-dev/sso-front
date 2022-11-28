import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientDetailsComponent} from "./client-details/client-details.component";
import {EditPasswordComponent} from "./edit-password/edit-password.component";
import {ClientScopesComponent} from "./client-scopes/client-scopes.component";
import {EditClientAttributesComponent} from "./edit-client-attributes/edit-client-attributes.component";
import {ClientGrandAuthoritiesComponent} from "./client-grand-authorities/client-grand-authorities.component";
import {ClientResourcesComponent} from "./client-resources/client-resources.component";
import {ClientRedirectUrisComponent} from "./client-redirect-uris/client-redirect-uris.component";

const routes: Routes = [
  {path: '', component: ClientDetailsComponent},
  {path: 'edit-password', component: EditPasswordComponent},
  {path: 'edit-scopes', component: ClientScopesComponent},
  {path: 'edit-client-attributes', component: EditClientAttributesComponent},
  {path: 'edit-client-redirect-uris', component: ClientRedirectUrisComponent},
  {path: 'edit-client-resources', component: ClientResourcesComponent},
  {path: 'edit-client-granted-authorities', component: ClientGrandAuthoritiesComponent},
  {path: '*', redirectTo: "/not-found"}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientControlRoutingModule { }

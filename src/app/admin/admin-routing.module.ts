import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientsComponent} from "./realms/clients/clients.component";
import {RealmsComponent} from "./realms/realms.component";
import {DetailViewComponent} from "./realms/detail-view/detail-view.component";
import {OptionsComponent} from "./realms/options/options.component";
import {RealmUserComponent} from "./realms/realm-user/realm-user.component";
import {UsersComponent} from "./users/users.component";
import {ScopesComponent} from "./scopes/scopes.component";
import {RolesComponent} from "./roles/roles.component";
import {AddUserComponent} from "./realms/add-user/add-user.component";

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'realms', component: RealmsComponent},
  {path: 'roles', component: RolesComponent},
  {path: 'scopes', component: ScopesComponent},
  {path: ':realm/clients', component: ClientsComponent},
  {path: ':realm/detail-view', component: DetailViewComponent},
  {path: ':realm/users', component: RealmUserComponent},
  {path: ':realm/user/add', component: AddUserComponent},
  {path: ':realm/options', component: OptionsComponent},
  {path: '', redirectTo:"/admin/realms"},
  {path: '*', redirectTo:"/not-found"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}

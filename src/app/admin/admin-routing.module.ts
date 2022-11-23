import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientsComponent} from "./realms/detail-view/clients/clients.component";
import {RealmsComponent} from "./realms/realms.component";
import {DetailViewComponent} from "./realms/detail-view/detail-view.component";
import {OptionsComponent} from "./realms/detail-view/options/options.component";
import {RealmUserComponent} from "./realms/detail-view/user/realm-user.component";
import {UsersComponent} from "./users/users.component";
import {ScopesComponent} from "./realms/detail-view/scopes/scopes.component";
import {RolesComponent} from "./roles/roles.component";
import {AddUserComponent} from "./realms/detail-view/user/user-control/add-user/add-user.component";
import {AuthGuard} from "../_guard/auth.guard";
import {UserControlComponent} from "./realms/detail-view/user/user-control/user-control.component";
import {ClientAddComponent} from "./realms/detail-view/clients/client-control/client-add/client-add.component";
import {ClientControlComponent} from "./realms/detail-view/clients/client-control/client-control.component";
import {ResourcesComponent} from "./realms/detail-view/resources/resources.component";

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'realms', component: RealmsComponent},
  {path: 'roles', component: RolesComponent},
  {path: ':realm/scopes', component: ScopesComponent},
  {path: ':realm/resources', component: ResourcesComponent},
  {path: ':realm/detail-view', component: DetailViewComponent},
  {path: ':realm/users', component: RealmUserComponent},
  {path: ':realm/clients', component: ClientsComponent},
  {path: ':realm/user/add', component: AddUserComponent},
  {path: ':realm/client/add', component: ClientAddComponent},
  {path: ':realm/options', component: OptionsComponent},
  {
    path: ':realm/user-control/:id',
    component: UserControlComponent,
    loadChildren: () => import('./realms/detail-view/user/user-control/user-control-routing.module').then(m => m.UserControlRoutingModule),
    canActivate: [AuthGuard]
  },
  {
    path: ':realm/client-control/:id',
    component: ClientControlComponent,
    loadChildren: () => import('./realms/detail-view/clients/client-control-routing.module').then(m => m.ClientControlRoutingModule),
    canActivate: [AuthGuard]
  },
  {path: "", pathMatch: 'full', redirectTo: "/admin/realms"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}

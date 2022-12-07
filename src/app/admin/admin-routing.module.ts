import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RealmsComponent} from "./realms/detail-view/realm-list/realms.component";
import {DetailViewComponent} from "./realms/detail-view/home/detail-view.component";
import {OptionsComponent} from "./realms/detail-view/options/options.component";
import {RealmUserComponent} from "./realms/detail-view/user-control/user-list/realm-user.component";
import {UsersComponent} from "./users/users.component";
import {ScopesComponent} from "./realms/detail-view/scopes/scopes.component";
import {RolesComponent} from "./roles/roles.component";
import {AddUserComponent} from "./realms/detail-view/user-control/add-user/add-user.component";
import {AuthGuard} from "../_guard/auth.guard";
import {UserControlComponent} from "./realms/detail-view/user-control/main-page/user-control.component";
import {ResourcesComponent} from "./realms/detail-view/resources/resources.component";
import {ClientControlComponent} from "./realms/detail-view/client-control/main-page/client-control.component";
import {ClientAddComponent} from "./realms/detail-view/client-control/client-add/client-add.component";
import {ClientsComponent} from "./realms/detail-view/client-control/client-list/clients.component";
import {RealmSocialNetworksComponent} from "./realms/detail-view/realm-social-networks/realm-social-networks.component";

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'realms', component: RealmsComponent},
  {path: 'roles', component: RolesComponent},
  {path: ':realm/scopes', component: ScopesComponent},
  {path: ':realm/resources', component: ResourcesComponent},
  {path: ':realm/detail-view', component: DetailViewComponent},
  {path: ':realm/users', component: RealmUserComponent},
  {path: ':realm/clients', component: ClientsComponent},
  {path: ':realm/social-networks', component: RealmSocialNetworksComponent},
  {path: ':realm/user/add', component: AddUserComponent},
  {path: ':realm/client/add', component: ClientAddComponent},
  {path: ':realm/options', component: OptionsComponent},
  {
    path: ':realm/user-control/:id',
    component: UserControlComponent,
    loadChildren: () => import('./realms/detail-view/user-control/user-control-routing.module').then(m => m.UserControlRoutingModule),
    canActivate: [AuthGuard]
  },
  {
    path: ':realm/client-control/:id',
    component: ClientControlComponent,
    loadChildren: () => import('./realms/detail-view/client-control/client-control-routing.module').then(m => m.ClientControlRoutingModule),
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

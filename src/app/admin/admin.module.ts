import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {ClientsComponent} from './realms/detail-view/clients/clients.component';
import {RealmsComponent} from './realms/realms.component';
import {NgbDropdownModule, NgbModalModule, NgbModule, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {DetailViewComponent} from './realms/detail-view/detail-view.component';
import {OptionsComponent} from './realms/detail-view/options/options.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PaginationComponent} from "../_components/pagination/pagination.component";
import { RealmUserComponent } from './realms/detail-view/user/realm-user.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { ScopesComponent } from './realms/detail-view/scopes/scopes.component';
import { AddUserComponent } from './realms/detail-view/user/user-control/add-user/add-user.component';
import { UserControlComponent } from './realms/detail-view/user/user-control/user-control.component';
import {UserControlModule} from "./realms/detail-view/user/user-control/user-control.module";
import { ClientAddComponent } from './realms/detail-view/clients/client-control/client-add/client-add.component';
import { ClientControlComponent } from './realms/detail-view/clients/client-control/client-control.component';
import {ClientControlModule} from "./realms/detail-view/clients/client-control.module";
import { ResourcesComponent } from './realms/detail-view/resources/resources.component';

@NgModule({
  declarations: [
    AdminComponent,
    ClientsComponent,
    RealmsComponent,
    DetailViewComponent,
    OptionsComponent,
    PaginationComponent,
    RealmUserComponent,
    UsersComponent,
    RolesComponent,
    ScopesComponent,
    AddUserComponent,
    UserControlComponent,
    ClientAddComponent,
    ClientControlComponent,
    ResourcesComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbPaginationModule,
    NgbModalModule,
    NgbDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    UserControlModule,
    ClientControlModule
  ],
  exports:[
    PaginationComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

})
export class AdminModule {
}

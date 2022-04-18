import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {ClientsComponent} from './realms/clients/clients.component';
import {RealmsComponent} from './realms/realms.component';
import {NgbModalModule, NgbModule, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {DetailViewComponent} from './realms/detail-view/detail-view.component';
import {OptionsComponent} from './realms/options/options.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PaginationComponent} from "../_components/pagination/pagination.component";
import { RealmUserComponent } from './realms/realm-user/realm-user.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { ScopesComponent } from './scopes/scopes.component';
import { AddUserComponent } from './realms/add-user/add-user.component';
import { UserControlComponent } from './realms/user-control/user-control.component';

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
    AddUserComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbPaginationModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
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

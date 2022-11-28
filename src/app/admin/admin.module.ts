import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin-main-page/admin.component';
import {RealmsComponent} from './realms/detail-view/realm-list/realms.component';
import {NgbDropdownModule, NgbModalModule, NgbModule, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {DetailViewComponent} from './realms/detail-view/home/detail-view.component';
import {OptionsComponent} from './realms/detail-view/options/options.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RealmUserComponent} from './realms/detail-view/user-control/user-list/realm-user.component';
import {UsersComponent} from './users/users.component';
import {RolesComponent} from './roles/roles.component';
import {ScopesComponent} from './realms/detail-view/scopes/scopes.component';
import {AddUserComponent} from './realms/detail-view/user-control/add-user/add-user.component';
import {UserControlComponent} from './realms/detail-view/user-control/main-page/user-control.component';
import {UserControlModule} from "./realms/detail-view/user-control/user-control.module";
import {ResourcesComponent} from './realms/detail-view/resources/resources.component';
import {ClientControlComponent} from "./realms/detail-view/client-control/main-page/client-control.component";
import {SharedModuleModule} from "./shared-module/shared-module.module";
import {ClientControlModule} from "./realms/detail-view/client-control/client-control.module";

@NgModule({
  declarations: [
    AdminComponent,
    RealmsComponent,
    DetailViewComponent,
    OptionsComponent,
    RealmUserComponent,
    UsersComponent,
    UsersComponent,
    RolesComponent,
    ScopesComponent,
    AddUserComponent,
    UserControlComponent,
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
    SharedModuleModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    UserControlModule,
    ClientControlModule
  ],
  schemas:[
    NO_ERRORS_SCHEMA
  ]
})
export class AdminModule {
}

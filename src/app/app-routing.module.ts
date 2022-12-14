import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./_guard/auth.guard";
import {AdminComponent} from "./admin/admin-main-page/admin.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {RegisterComponent} from "./register/register.component";
import {RegisterFormComponent} from "./register/register-form/register-form.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";

const routes: Routes = [
  {path: 'admin-client-main-page', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'register-form', component: RegisterFormComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {
    path: 'admin', component: AdminComponent,
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard]
  },
  {path: '', redirectTo: 'admin-client-main-page', pathMatch: 'full'},
  {path: 'not-found', component: NotFoundComponent},
  {path: '*', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

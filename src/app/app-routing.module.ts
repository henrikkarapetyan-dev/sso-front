import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./_guard/auth.guard";
import {AdminComponent} from "./admin/admin.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'admin', component: AdminComponent,
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard]
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'not-found', component: NotFoundComponent},
  {path: '*', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

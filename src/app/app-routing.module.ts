import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MypicComponent } from './components/mypic/mypic.component';

const routes: Routes = [
{
  path: '',
  component: HomeComponent,
  pathMatch: 'full',
},
{
  path: 'login',
  component: LoginComponent,
  pathMatch: "full",
},
{
  path: 'dashboard',
  component: DashboardComponent,
  pathMatch: 'full',
},
{
  path: 'mypic',
  component: MypicComponent,
  pathMatch: "full",
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login-page/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MypicComponent } from './components/mypic/mypic.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
{
  path: '',
  component: HomeComponent,
  pathMatch: 'full',
},
{
  path: 'login-page',
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
},

{
  path: "login",
  component: LoginComponent,
  pathMatch: "full"
},
{
  path: "signup",
  component: SignupComponent,
  pathMatch: "full"
}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }

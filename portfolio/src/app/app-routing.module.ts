import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { MyAuthGuard } from './myAuthGuard';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SignupComponent } from './signup/signup.component';
// import { MyAuthGuard } from './myAuthGuard';

const routes: Routes = [
  { path: 'home', component: PortfolioComponent, canActivate: [MyAuthGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

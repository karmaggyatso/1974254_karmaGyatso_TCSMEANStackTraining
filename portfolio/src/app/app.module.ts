import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyAuthGuard } from './myAuthGuard';
import { PortfolioDetail } from './portfolio.details';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PortfolioComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [MyAuthGuard], //provide the details about auth guard
  bootstrap: [AppComponent],
})
export class AppModule {}

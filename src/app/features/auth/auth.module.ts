import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';

import { AuthLayoutComponent } from '@layout/auth-layout/auth-layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    AuthRoutingModule
  ]
})
export class AuthModule { }

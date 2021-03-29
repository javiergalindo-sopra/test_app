import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    LoginPageRoutingModule,
  ],
  declarations: [LoginPage, LoginFormComponent],
})
export class LoginPageModule {}

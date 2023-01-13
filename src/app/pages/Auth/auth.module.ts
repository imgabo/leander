import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AppLoginComponent } from './app.login.component';
import { RegistroComponent } from './registro.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AppLoginComponent,
    RegistroComponent
    ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    ToastModule
  ],
  providers:[
    MessageService
  ]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/app/shared/guards/login.guard';
import { AppLoginComponent } from './app.login.component';
import { RegistroComponent } from './registro.component';

const routes: Routes = [
    {
        path: '',
        component: AppLoginComponent,
        canActivate : [LoginGuard]
    },
    {
        path: 'registro',
        component: RegistroComponent,
        canActivate: [LoginGuard]
    }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

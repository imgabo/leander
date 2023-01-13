import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/api/services';
import { AuthTokenService } from 'src/app/shared/services/authToken.service';

@Component({
  selector: 'app-login',
  templateUrl: './app.login.component.html',
})
export class AppLoginComponent {

    loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
    })

    constructor(private readonly fb : FormBuilder,
        private readonly messageService : MessageService,
        private readonly auth: AuthService,
        private readonly tokenService : AuthTokenService,
        private readonly router : Router) {

    }



    validateInput(): boolean {
        if (this.loginForm.invalid) {

            return true;
        } else {
            return false;
        }
    }

    validField(field: string) {
        return (
            this.loginForm.controls[field].errors &&
            this.loginForm.controls[field].touched
        );
    }


    login() {

        if(this.validateInput()){
            this.loginForm.markAllAsTouched();
            return;

        }
        this.auth.authLoginPost({
            body: this.loginForm.value
        }).subscribe({
            next: (data : any)=> {
                console.log(data)
                this.tokenService.setToken(data)

            },
            complete: () =>{
                console.log('completado')
                this.router.navigate(['/'])
            },
            error : (error : any)=> {
                this.messageService.add({severity:'error', summary:'Error', detail:error.error});
            }
        })
    }
}

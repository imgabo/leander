import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Usuario } from 'src/app/api/models';
import { AuthService } from 'src/app/api/services/auth.service';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {
    usuario : Usuario
    registroForm = this.fb.group({
        nombre: ['', [Validators.required, Validators.minLength(5)]],
        apellido: ['', [Validators.required, Validators.minLength(5)]],
        cedula_identidad: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
        nombre_banco: ['', [Validators.required, Validators.minLength(5)]],
        numero_cuenta: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
        numero_telefono: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
        email: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(5)]]
    })

    constructor(private readonly fb: FormBuilder, private readonly _au : AuthService, private readonly messageService : MessageService) { }

    ngOnInit(): void {

    }


    validateInput(): boolean {
        if (this.registroForm.invalid) {
            return true;
        } else {
            return false;
        }
    }

    validField(field: string) {
        return (
            this.registroForm.controls[field].errors &&
            this.registroForm.controls[field].touched
        );
    }

    async onRegister() {
        if (this.validateInput()) {
            this.registroForm.markAllAsTouched();
            return;
        }

        this.usuario = this.registroForm.value;
        this.usuario.password = null
        this._au.authRegisterPost({
            body: this.usuario,
            password:  this.registroForm.controls['password'].value
        }).subscribe({
            next:(data:any)=>{
                if(data){
                    data = JSON.parse(data)
                    console.log
                    console.log(data.numero)
                    if(data.numero == 500){

                        this.messageService.add({severity:'error', summary:'Error', detail:data.resultado});
                    }else{
                        this.messageService.add({severity:'success', summary:'Información', detail:'Registro Exitoso!'});
                    }
                }

            },
            complete:()=>{
                console.log('Completado')
            },
            error:(err: any)=>{
                console.log(err)
            }

        })
    };
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html'
})
export class VariablesComponent implements OnInit {
    formN  = this.fb.group ({
        nombre : ['', [Validators.required, Validators.minLength(5)]]
    })
    constructor(public ref: DynamicDialogRef,
        public config: DynamicDialogConfig,
        private readonly fb : FormBuilder) { }

    ngOnInit(): void {
        if(this.config.data) {
            console.log(this.config.data.nombre)
            this.formN.controls['nombre'].setValue(this.config.data.nombre)

        }
    }

    validateInput(): boolean {
        if (this.formN.invalid) {
            return true;
        } else {
            return false;
        }
    }


    validField(field : any) {
        return (
            this.formN.controls[field].errors &&
            this.formN.controls[field].touched
        );
    }

    saveProduct(){
        if (this.validateInput()){
            this.formN.markAllAsTouched();
            return;
        }
        this.ref.close(this.formN.value);
    }

    cerrar(){
        this.ref.close();
    }

}

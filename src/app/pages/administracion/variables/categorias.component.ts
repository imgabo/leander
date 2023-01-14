import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Categoria } from 'src/app/api/models';
import { CategoriasService } from 'src/app/api/services';
import { VariablesComponent } from 'src/app/shared/components/dialogs/variables/variables.component';
import { HelperService } from 'src/app/shared/services/helper.service';

@Component({
    selector: 'app-categorias',
    templateUrl: './categorias.component.html'
})
export class CategoriasComponent implements OnInit {
    categorias: any;
    ref: DynamicDialogRef;
    cols: any[];
    constructor(private readonly dialogService: DialogService,
        private readonly messageService: MessageService,
        private readonly _categorias: CategoriasService,
        private readonly _helper: HelperService,
        private readonly confirmationService : ConfirmationService) { }

    ngOnInit(): void {
        this.listarCategorias();

        this.cols = [
            {field: 'id', header: 'ID'},
            {field: 'nombre', header:'Nombre'}
        ]
    }

    async listarCategorias () {
        this._categorias.categoriasGetCategoriasGet().subscribe((data: any) => {
            data = this._helper.jsonToDataParse(data)
            this.categorias = data
        })
    }
    nuevaCategoria() {
        this.ref = this.dialogService.open(VariablesComponent, {
            header: 'Agregar Categoria',
            width: 'auto',
            height: 'auto',
            contentStyle: { "overflow": "hidden" },
            baseZIndex: 10000,
            modal: true
        })

        this.ref.onClose.subscribe((categoria: Categoria) => {
            if (categoria) {
                this._categorias.categoriasInsertCategoriaPost({
                    body: categoria
                }).subscribe({
                    next: (data: any) => {
                        if (data) {
                            data = JSON.parse(data)
                            console.log
                            console.log(data.numero)
                            if (data.numero == 500) {

                                this.messageService.add({ severity: 'error', summary: 'Error', detail: data.resultado });
                            } else {
                                this.messageService.add({ severity: 'success', summary: 'Información', detail: 'Registro Exitoso!' });
                            }
                        }
                    },
                    complete: () => {
                        this.listarCategorias();
                    },
                    error: (Error: any) => {
                        console.log(Error)
                    }
                })
            }
        })
    };

    editCategoria(categoria : any) {
        this.ref = this.dialogService.open(VariablesComponent, {
            header: 'Agregar Categoria',
            width: 'auto',
            height: 'auto',
            contentStyle: { "overflow": "hidden" },
            baseZIndex: 10000,
            modal: true,
            data: categoria
        })

        this.ref.onClose.subscribe((data : any) => {
            if (data) {
                this._categorias.categoriasUpdateCategoriaPut({
                    body: {id : categoria.id, nombre : data.nombre}
                }).subscribe({
                    next:(data:any) => {
                        data = JSON.parse(data)
                        if (data.numero == 500) {
                            this.messageService.add({ severity: 'error', summary: 'Error', detail: data.resultado });
                        } else {
                            this.messageService.add({ severity: 'success', summary: 'Información', detail: 'Registro Modificado Exitosamente!' });
                        }
                    },
                    complete:() =>{
                       this.listarCategorias();
                    },
                    error: (data : any) =>{

                    }
                })
            }
        })
    }
}

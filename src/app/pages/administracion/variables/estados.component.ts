import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Estado } from 'src/app/api/models';
import { EstadosService } from 'src/app/api/services';
import { VariablesComponent } from 'src/app/shared/components/dialogs/variables/variables.component';
import { HelperService } from 'src/app/shared/services/helper.service';

@Component({
    selector: 'app-estados',
    templateUrl: './estados.component.html',

})
export class EstadosComponent implements OnInit {
    estados: any;
    ref: DynamicDialogRef;
    cols: any[];

    constructor(private readonly dialogService: DialogService,
        private readonly messageService: MessageService,
        private readonly _estados: EstadosService,
        private readonly _helper: HelperService,
        private readonly confirmationService: ConfirmationService) { }

    ngOnInit(): void {
        this.listarEstados();
        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'nombre', header: 'Nombre' }
        ];
    }

    async listarEstados() {
        this._estados.estadosGetEstadosGet().subscribe((data: any) => {
            if (data) {
                data = this._helper.jsonToDataParse(data);
                this.estados = data;
            }
        })
    }

    nuevoEstado() {
        this.ref = this.dialogService.open(VariablesComponent, {
            header: 'Agregar Estado',
            width: 'auto',
            height: 'auto',
            contentStyle: { "overflow": "hidden" },
            baseZIndex: 10000,
            modal: true
        })

        this.ref.onClose.subscribe((estado: Estado) => {
            if (estado) {
                this._estados.estadosInsertEstadosPost({
                    body: estado
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
                        this.listarEstados();
                    },
                    error: (Error: any) => {
                        console.log(Error)
                    }
                })
            }
        })
    }


    editEstado(estado: any) {
        this.ref = this.dialogService.open(VariablesComponent, {
            header: 'Editar Estado',
            width: 'auto',
            height: 'auto',
            contentStyle: { "overflow": "hidden" },
            baseZIndex: 10000,
            modal: true,
            data: estado
        })


        this.ref.onClose.subscribe((data: any) => {
            console.log(data)
            if (data) {
                this._estados.estadosUpdateEstadosPut({
                    body: { id: estado.id, nombre: data.nombre }
                }).subscribe({
                    next: (data: any) => {
                        data = JSON.parse(data)
                        if (data.numero == 500) {
                            this.messageService.add({ severity: 'error', summary: 'Error', detail: data.resultado });
                        } else {
                            this.messageService.add({ severity: 'success', summary: 'Información', detail: 'Registro Modificado Exitosamente!' });
                        }
                    },
                    complete: () => {
                        this.listarEstados();
                    },
                    error: (data: any) => {

                    }
                })
            }
        })

    }

    deleteProduct(categoria: any) {
        this.confirmationService.confirm({
            message: 'Estas seguro de eliminar el registro?',
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this._estados.estadosDeleteEstadosDelete({
                    id: categoria.id
                }).subscribe({
                    next: (data: any) => {
                        console.log(data)
                        data = JSON.parse(data)
                        console.log(data)
                        if (data.error == 0) {
                            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Hay productos con este estado asociado' });
                            return
                        }
                        this.messageService.add({ severity: 'success', summary: 'Información', detail: 'Estado eliminado con exito!' });

                    },
                    complete: () => {
                        this.listarEstados()
                    },
                    error: (error: any) => {
                        console.log(error)
                    }
                })
            },
            reject: (type) => {

            }
        });
    }

}

import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Localidad } from 'src/app/api/models';
import { LocalidadesService } from 'src/app/api/services';
import { VariablesComponent } from 'src/app/shared/components/dialogs/variables/variables.component';
import { HelperService } from 'src/app/shared/services/helper.service';

@Component({
  selector: 'app-locaciones',
  templateUrl: './locaciones.component.html',
})
export class LocacionesComponent implements OnInit {
    localidades : any;
    ref: DynamicDialogRef;
    cols: any[];
  constructor(private readonly dialogService: DialogService,
    private readonly messageService: MessageService,
    private readonly _localidades : LocalidadesService,
    private readonly _helper: HelperService,
    private readonly confirmationService : ConfirmationService) { }

  ngOnInit(): void {
    this.listarLocalidades();

    this.cols = [
        {field: 'id', header: 'ID'},
        {field: 'nombre', header:'Nombre'}
    ];
  }

  async listarLocalidades() {
    this._localidades.localidadesGetLocalidadesGet().subscribe((data : any) =>{
        if( data ){
            data = this._helper.jsonToDataParse(data)
            this.localidades = data
        }

    })
  }

  nuevaLocalidad(){
    this.ref = this.dialogService.open(VariablesComponent, {
        header: 'Agregar Localidad',
        width: 'auto',
        height: 'auto',
        contentStyle: { "overflow": "hidden" },
        baseZIndex: 10000,
        modal: true
    })

    this.ref.onClose.subscribe((localidad: Localidad) => {
        if (localidad) {
            this._localidades.localidadesInsertLocalidadPost({
                body: localidad
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
                    this.listarLocalidades();
                },
                error: (Error: any) => {
                    console.log(Error)
                }
            })
        }
    })
  }


  editLocalidad(localidad : any){
    this.ref = this.dialogService.open(VariablesComponent, {
        header: 'Editar Localidad',
        width: 'auto',
        height: 'auto',
        contentStyle: { "overflow": "hidden" },
        baseZIndex: 10000,
        modal: true,
        data: localidad
    })


    this.ref.onClose.subscribe((data : any) => {
        console.log(data)
        if (data) {
            this._localidades.localidadesUpdateLocalidadPut({
                body: {id : localidad.id, nombre : data.nombre}
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
                   this.listarLocalidades();
                },
                error: (data : any) =>{

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
            this._localidades.localidadesDeleteLocalidadDelete({
                id: categoria.id
            }).subscribe({
                next: (data: any) => {
                    console.log(data)
                    data = JSON.parse(data)
                    console.log(data)
                    if (data.error == 0) {
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Hay productos con esta localidad asociada' });
                        return
                    }
                    this.messageService.add({ severity: 'success', summary: 'Información', detail: 'Localidad eliminada con exito!' });

                },
                complete: () => {
                    this.listarLocalidades()
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

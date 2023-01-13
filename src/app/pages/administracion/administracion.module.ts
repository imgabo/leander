import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { ProductosComponent } from './productos.component';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { CategoriasComponent } from './variables/categorias.component';
import { EstadosComponent } from './variables/estados.component';
import { LocacionesComponent } from './variables/locaciones.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextarea, InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ImageModule } from 'primeng/image';
import { FileUploadModule } from 'primeng/fileupload';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    ProductosComponent,
    CategoriasComponent,
    EstadosComponent,
    LocacionesComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    ToolbarModule,
    TableModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    InputSwitchModule,
    ImageModule,
    FileUploadModule,
    CalendarModule,
    DropdownModule
  ],
})
export class AdministracionModule { }

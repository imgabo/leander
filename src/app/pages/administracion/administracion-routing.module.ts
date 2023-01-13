import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/app/shared/guards/login.guard';
import { ProductosComponent } from './productos.component';
import { CategoriasComponent } from './variables/categorias.component';
import { EstadosComponent } from './variables/estados.component';
import { LocacionesComponent } from './variables/locaciones.component';

const routes: Routes = [
    {path:'',component: ProductosComponent },
    {path: 'productos', component : ProductosComponent},
    {path: 'categorias', component : CategoriasComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }

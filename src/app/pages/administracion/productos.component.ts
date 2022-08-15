import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {

    productos : any []
    productDialog: boolean;

    constructor() { }

    ngOnInit(): void {
        this.productDialog = false
        this.productos = [{
            id: 1, nombre : 'Zapato', imagen:'shoes', FechadeIngreso : '15/03/2022',Categoria:'Zapato',estado:'No enviado', locacion:'Estados Unidos', precioCompra:400,precioVenta:200,observacion:'',

        },
        {
            id: 2, nombre : 'Zapato', imagen:'shoes', FechadeIngreso : '15/03/2022',Categoria:'Zapato',estado:'No enviado', locacion:'Estados Unidos', precioCompra:400,precioVenta:200,observacion:''
        },
        {
            id: 3, nombre : 'Zapato', imagen:'shoes', FechadeIngreso : '15/03/2022',Categoria:'Zapato',estado:'No enviado', locacion:'Estados Unidos', precioCompra:400,precioVenta:200,observacion:''
        },
    ]
    }


    nuevoProducto() : void {
        this.productDialog = true
    }



}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateCategoriaComponent } from '../update-categoria/update-categoria.component';
import { Categoria } from 'src/app/interfaces/categoria';
import { Proveedor } from 'src/app/interfaces/proveedor';
import { UpdateProveedorComponent } from '../update-proveedor/update-proveedor.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  productos: Producto[] =[];
  categoriaActualizar:any;
  proveedorActualizar:any;

  constructor(private productoService: ProductoService, private router: Router, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this.productoService.getProductos()
    .subscribe((productos: any)=>{
      this.productos = productos;
      console.log(this.productos)
    });
  }

  updateCategoria(categoria:Producto):any{
    this.categoriaActualizar = categoria;
    console.log(this.categoriaActualizar)
    const dialogRef = this.matDialog.open(UpdateCategoriaComponent, {
      data: {
        categoriaData: categoria,
      },
    });

  }

  updateProveedor(proveedor:Producto){
    this.proveedorActualizar = proveedor;
    console.log(this.proveedorActualizar)
    const dialogRef = this.matDialog.open(UpdateProveedorComponent, {
      data: {
        proveedorData: proveedor,
      },
    });
  }

  updateProducto(producto:Producto):void{
    console.log(producto)
    localStorage.setItem("id", producto.idproducto.toString());
    this.router.navigate(['updateProducto']);

  }




}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  productos: Producto[] =[];

  constructor(private productoService: ProductoService, private router: Router) { }

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

  updateCategoria(producto:Producto){
    console.log("update", producto.idcategoria)

  }

  updateProducto(producto:Producto):void{
    console.log(producto)
    localStorage.setItem("id", producto.idproducto.toString());
    this.router.navigate(['updateProducto']);

  }


}

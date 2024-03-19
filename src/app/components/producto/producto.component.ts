import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Categoria } from 'src/app/interfaces/categoria';
import { Proveedor } from 'src/app/interfaces/proveedor';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { ProveedorService } from 'src/app/services/proveedor/proveedor.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  formCrearProducto: FormGroup = this.forBuilder.group({
    nombre: ['', [Validators.required]],
    precio: ['', [Validators.required]],
    idcategoria: new FormGroup({
      idcategoria: new FormControl(''),
    }),
    idproveedor: new FormGroup({
      idproveedor: new FormControl(''),
    }),
  })

  constructor(private forBuilder: FormBuilder, private productoService: ProductoService , private router:Router, private categoriaservice: CategoriaService, private proveedorService: ProveedorService) { }

  categorias:Categoria[]=[];
  proveedores:Proveedor[]=[];

  ngOnInit(): void {
    this.getCategorias();
    this.getProveedores();
  }

  get nombre(){
    return this.formCrearProducto.get('nombre') as FormControl;
  }

  get precio(){
    return this.formCrearProducto.get('precio') as FormControl;
  }

  get idcategoria(){
    return this.formCrearProducto.get('idcategoria') as FormControl;
  }

  get idproveedor(){
    return this.formCrearProducto.get('idproveedor') as FormControl;
  }

  crearProducto(){
    console.log(this.formCrearProducto.value)
    this.productoService.crearProducto(this.formCrearProducto.value).subscribe(
      (response) =>{
        console.log("Producto creado")
      },
      (error) =>{
        console.log("Error al crear el producto", error)
      }
    );
  }

  getCategorias() {
    this.categoriaservice.getCategorias()
      .subscribe((categorias: any) => {
        this.categorias = categorias;
        console.log("Directores", this.categorias)
      });
  }

  getProveedores() {
    this.proveedorService.getProveedores()
      .subscribe((proveedores: any) => {
        this.proveedores = proveedores;
        console.log("Directores", this.proveedores)
      });
  }

}

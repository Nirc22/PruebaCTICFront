import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Categoria } from 'src/app/interfaces/categoria';
import { Proveedor } from 'src/app/interfaces/proveedor';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { ProveedorService } from 'src/app/services/proveedor/proveedor.service';

@Component({
  selector: 'app-update-producto',
  templateUrl: './update-producto.component.html',
  styleUrls: ['./update-producto.component.css']
})
export class UpdateProductoComponent implements OnInit {

  formUpdateProducto: FormGroup = this.forBuilder.group({
    nombre: ['', [Validators.required]],
    precio: ['', [Validators.required]],
    idcategoria: new FormGroup({
      idcategoria: new FormControl(''),
    }),
    idproveedor: new FormGroup({
      idproveedor: new FormControl(''),
    }),
  })

  producto:any[]=[];

  categorias:Categoria[]=[];
  proveedores:Proveedor[]=[];

  constructor(private forBuilder: FormBuilder, private productoService: ProductoService , private router:Router, private categoriaservice: CategoriaService, private proveedorService: ProveedorService) { }

  ngOnInit(): void {
    this.getProductoById();
    this.getCategorias();
    this.getProveedores();
  }

  get nombre(){
    return this.formUpdateProducto.get('nombre') as FormControl;
  }

  get precio(){
    return this.formUpdateProducto.get('precio') as FormControl;
  }

  get idcategoria(){
    return this.formUpdateProducto.get('idcategoria') as FormControl;
  }

  get idproveedor(){
    return this.formUpdateProducto.get('idproveedor') as FormControl;
  }

  updateProducto(){
    console.log(this.formUpdateProducto.value)
    const id = localStorage.getItem('id');
    const productoData = this.formUpdateProducto.value;
    this.productoService.updateProducto(productoData, id).subscribe(
      (response) => {
        console.log('Producto actualizado:');
        this.router.navigate(['dashboard']);
      },
      (error) => {
        console.error('Error al actualizar producto:', error);
      }
    );

  }

  getProductoById(){
    let id = (localStorage.getItem("id"));
    this.productoService.getProductoById(id)
      .subscribe((producto: any) => {
        this.producto = producto;
        console.log("Holaaaaa",this.producto)
        this.formUpdateProducto.setValue({
          nombre: producto.nombre,
          precio: producto.precio,
          idcategoria: {idcategoria: producto.idcategoria.idcategoria},
          idproveedor: {idproveedor: producto.idproveedor.idproveedor},
        })
      })
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

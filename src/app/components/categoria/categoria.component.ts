import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';



@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  formCategoria: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required]],
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private formBuilder: FormBuilder, private categoriaServie: CategoriaService) { }

  ngOnInit(): void {
  }

  get nombre(){
    return this.formCategoria.get('nombre') as FormControl;
  }

  crearCategoria(){
    const productoData = this.formCategoria.value;
    this.categoriaServie.crearCategoria(this.formCategoria.value).subscribe(
      (response) => {
        console.log('Categoria creada:', response);
        location.reload();
      },
      (error) => {
        console.error('Error al crear categoria:', error);
      }
    );
  }

}

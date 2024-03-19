import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';

@Component({
  selector: 'app-update-categoria',
  templateUrl: './update-categoria.component.html',
  styleUrls: ['./update-categoria.component.css']
})
export class UpdateCategoriaComponent implements OnInit {

  formActualizarCategoria: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required]],
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private caategoriaService: CategoriaService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.datos();
  }

  datos(){
    // console.log(this.data.categoriaData.idcategoria);
    console.log(this.data.categoriaData.idcategoria.nombre)

    this.formActualizarCategoria.setValue({
      nombre: this.data.categoriaData.idcategoria.nombre,
    })
  }

  actualizarCategoria(){
    const categoriaData = this.formActualizarCategoria.value;
    console.log(categoriaData)
    console.log(this.data.categoriaData.idcategoria.idcategoria)
    this.caategoriaService.updateCategoria(this.data.categoriaData.idcategoria.idcategoria ,categoriaData).subscribe(
      (response) => {
        console.log('Categoria Actualizada:');
        location.reload();
      },
      (error) => {
        console.error('Error al actualizar categoria:', error);
      }
    );

  }

}

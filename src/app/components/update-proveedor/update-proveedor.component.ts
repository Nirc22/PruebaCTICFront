import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProveedorService } from 'src/app/services/proveedor/proveedor.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-update-proveedor',
  templateUrl: './update-proveedor.component.html',
  styleUrls: ['./update-proveedor.component.css']
})
export class UpdateProveedorComponent implements OnInit {

  formActualizarProveedor: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private proveedorService: ProveedorService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.datos();

  }

  datos(){
    // console.log(this.data.categoriaData.idcategoria);
    console.log(this.data.proveedorData.idproveedor.nombre)

    this.formActualizarProveedor.setValue({
      nombre: this.data.proveedorData.idproveedor.nombre,
      telefono: this.data.proveedorData.idproveedor.telefono,
    })
  }

  actualizarProveedor(){
    const proveedorData = this.formActualizarProveedor.value;
    console.log(proveedorData)
    console.log(this.data.proveedorData.idcategoria.idcategoria)
    this.proveedorService.updateProveedor(this.data.proveedorData.idproveedor.idproveedor ,proveedorData).subscribe(
      (response) => {
        console.log('Proveedor Actualizado:');
        location.reload();
      },
      (error) => {
        console.error('Error al actualizar proveedor:', error);
      }
    );

  }

}

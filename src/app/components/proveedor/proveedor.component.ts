import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ProveedorService } from 'src/app/services/proveedor/proveedor.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  formProveedor: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
  })

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private formBuilder: FormBuilder, private proveedorService: ProveedorService) { }

  ngOnInit(): void {
  }

  crearProveedor(){
    const productoData = this.formProveedor.value;
    this.proveedorService.crearProveedor(this.formProveedor.value).subscribe(
      (response) => {
        console.log('Proveedor creado:', response);
        location.reload();
      },
      (error) => {
        console.error('Error al crear proveedor:', error);
      }
    );
  }

}

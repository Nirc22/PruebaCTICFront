import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriaComponent } from '../categoria/categoria.component';
import { ProveedorComponent } from '../proveedor/proveedor.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  crearProducto(){
    const dialogRef = this.matDialog.open(CategoriaComponent, {
      // data: {
      //   reviewData: review,
      //   formValues: this.formActualizarReview.value,
      // },
    });
  }

  crearProveedor(){
    const dialogRef = this.matDialog.open(ProveedorComponent, {
      // data: {
      //   reviewData: review,
      //   formValues: this.formActualizarReview.value,
      // },
    });
  }

}

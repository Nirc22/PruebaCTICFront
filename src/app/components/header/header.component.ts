import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriaComponent } from '../categoria/categoria.component';
import { ProveedorComponent } from '../proveedor/proveedor.component';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  token: any;
  header: any;

  constructor(private matDialog: MatDialog, private authService: AuthService, private rotuer: Router) { }

  ngOnInit(): void {
    this.authService.getTokenObservable().subscribe(() => {
      this.validarToken();
    })
    // this.validarToken();
  }

  validarToken(){
    this.token = this.authService.getToken();
    if (this.token) {
      this.header = true;
    } else {
      this.header = false;
      console.log('No existe token')
    }

  }

  crearProducto(){
    const dialogRef = this.matDialog.open(CategoriaComponent, {
    });
  }

  crearProveedor(){
    const dialogRef = this.matDialog.open(ProveedorComponent, {
    });
  }

  logOut() {
    localStorage.removeItem("token")
    this.rotuer.navigate(['login']);
  }

}

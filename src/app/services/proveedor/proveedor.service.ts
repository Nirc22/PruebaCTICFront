import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Proveedor } from 'src/app/interfaces/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http:HttpClient) { }

  getProveedores(){
    return this.http.get<Proveedor>(environment.urlApi+"getProveedores")
  }
}

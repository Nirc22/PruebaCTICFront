import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, firstValueFrom, throwError } from 'rxjs';
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

  crearProveedor(proveedor:any){
    return this.http.post<any>(environment.urlApi+"crearProveedor", proveedor)
  }

  getProveedorById(id:any):Observable<Proveedor>{
    return this.http.get<Proveedor>(environment.urlApi+"getProveedorById/"+id)//terminar de hacer
  }

  updateProveedor(form:any, id:any){
    return this.http.put<any>(environment.urlApi+"actualizarProveedor/"+id, form)
  }
}

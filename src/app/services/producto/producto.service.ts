import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, firstValueFrom, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from 'src/app/interfaces/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }

  getProductos(){
    return this.http.get<Producto>(environment.urlApi+"getProductos")//terminar de hacer
  }

  crearProducto(producto:any){
    return this.http.post<any>(environment.urlApi+"crearProducto", producto)
  }

  getProductoById(id:any):Observable<Producto>{
    return this.http.get<Producto>(environment.urlApi+"getProductoById/"+id)//terminar de hacer
  }

  updateProducto(form:any, id:any){
    return this.http.put<any>(environment.urlApi+"actualizarProducto/"+id, form)
  }
}

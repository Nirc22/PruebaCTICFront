import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, catchError, firstValueFrom, throwError } from 'rxjs';
import { Categoria } from 'src/app/interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  getCategorias():Observable<Categoria>{
    return this.http.get<Categoria>(environment.urlApi+"getCategorias")
  }

  crearCategoria(categoria:any){
    return this.http.post<any>(environment.urlApi+"crearCategoria", categoria)
  }

  getCategoriaById(id:any):Observable<Categoria>{
    return this.http.get<Categoria>(environment.urlApi+"getCategoriaById/"+id)//terminar de hacer
  }

  updateCategoria(form:any, id:any){
    return this.http.put<any>(environment.urlApi+"actualizarCategoria/"+id, form)
  }
}

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
}

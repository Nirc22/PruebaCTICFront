import { HttpClient, HttpErrorResponse, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequets } from 'src/app/interfaces/login-requets';
import { environment } from 'src/environments/environment';
import { Observable, catchError, throwError, BehaviorSubject, tap, map } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(creds: LoginRequets){
    return this.http.post(environment.urlHost+"login", creds, {
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>) =>{
      const body = response.body;
      const headers = response.headers;

      const bearerToken = headers.get('Authorization')!;
      const token = bearerToken.replace('Bearer', '');

      localStorage.setItem('token', token);
      return body;

    }))
  }

  getToken(){
    return localStorage.getItem('token');
  }
}

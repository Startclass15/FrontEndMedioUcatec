//Importar el injectable
import { inject, Injectable } from '@angular/core';

import { HttpInterceptor,HttpRequest,HttpHandler,HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auth } from '../auth';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  constructor(private authService:Auth){}
  intercept(peticion:HttpRequest<any>, siguiente:HttpHandler):Observable<HttpEvent<any>>
  {
    const token=this.authService.getToken();
    if(token){
      const authPeticion=peticion.clone({
        headers: peticion.headers.set(
          'Authorization',`Bearer ${token}`
        )
      });
      return siguiente.handle(authPeticion);
    }
    return siguiente.handle(peticion);
  }
}
import { Injectable } from '@angular/core';
//Importar las solicitudes http al servidor
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Auth {
  private urlLogin='https://api.ucatec.com/auth/login';
  
  constructor(private http:HttpClient ) { }
  login(credentials: {email:string; password: string}):Observable<any>{
    return this.http.post<{'token':string}> (this.urlLogin,credentials).pipe(
      tap(response=>{
        localStorage.setItem('token',response.token);
      })
    );
  }
  logout(){
    localStorage.removeItem('token');
  }
  getToken():string|null{
    return localStorage.getItem('token');   
  }
  estaAutentificado():boolean{
    const token=this.getToken();
    return !!token;
  }
}

import { Injectable } from '@angular/core';

//Importar airtable

import Airtable from 'airtable';
import { Observable,from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Basedatos {

  private base:any;

  constructor() { 
    //Configuracion de la conexion con airtable
    Airtable.configure({
      endpointUrl:'https://api.airtable.com',
      apiKey:''
    });
    //Configurar el id de la base de datos
    this.base=Airtable.base('');
  }
  //Funcion para agregar un nuevo estudiante
  añadirEstudiante(datos:any):
  Observable<any>{
    return from(
      new Promise<any>((resolve,reject)=>{
        this.base("Estudiante").create([
          {
            "fields":{
              "nombre":datos.nombre,
              "celular":datos.celular,
              "carrera":datos.carrera,
              "fechaNacimiento":datos.fechaNacimiento,
              "edad":datos.edad,
              "direccion":datos.direccion,
              "ci":datos.ci
            }
          }
        ],function(error:any, registros:any[]){
          if(error){
            reject(error);
            return;
          }
          resolve(registros);
        } );
      })
    );
  }
}
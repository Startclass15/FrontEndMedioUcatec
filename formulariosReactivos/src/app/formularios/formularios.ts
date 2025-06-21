import { Component } from '@angular/core';
//PASO 1. IMPORTAR LOS MODULOS PARA LA INTERFAZ Y LA VALIDACION
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
//importar los formularios
import { FormGroup,FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
//Importacion del servicio
import { Basedatos } from '../basedatos';

@Component({
  selector: 'app-formularios',
  imports: [
    MatStepperModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './formularios.html',
  styleUrl: './formularios.css'
})
export class Formularios {

  //Paso 2. Crear los objetos de la clase FORMULARIOS
  primerFormulario: FormGroup;
  segundoFormulario: FormGroup;
  tercerFormulario: FormGroup;
  //definir el constructor
  constructor(
    private _formBuilder:FormBuilder,
    private airtableServicio:Basedatos,

  ){
    //Paso 3. Definir el formulario del primer paso 
    this.primerFormulario=this._formBuilder.group({
      nombre:['',Validators.required],
      celular:['',Validators.required],
      carrera:['',Validators.required],

    });
    //Definir el siguiente paso
    this.segundoFormulario=this._formBuilder.group({
      fechaNacimiento:['',Validators.required],
      edad:['',Validators.required]
    });
    //Definir paso final
    this.tercerFormulario=this._formBuilder.group({
      direccion:['',Validators.required],
      ci:['',Validators.required]
    });

  }

  //Paso 4. Metodo para enviar el formulario
  enviarFormulario():void{
    if(this.primerFormulario.valid && this.segundoFormulario.valid && this.tercerFormulario){
      const datosFormulario={
        ...this.primerFormulario.value,
        ...this.segundoFormulario.value,
        ...this.tercerFormulario.value,
      };
      //mostrar los datos en la consola
      console.log(datosFormulario)
      //envio a una base de datos solicitudes HTTP
      this.airtableServicio.añadirEstudiante(datosFormulario).subscribe(
        (respuesta)=>{
          console.log("Se registro correctamente los datos en airtable", respuesta)

        }
      );
      //Actualizacion de los datos
      this.primerFormulario.reset();
      this.segundoFormulario.reset();
      this.tercerFormulario.reset();
    }
  }



















}

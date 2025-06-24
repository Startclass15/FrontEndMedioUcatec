import { Component,OnInit } from '@angular/core';
import { FormBuilder,Validators,ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Auth } from '../auth';
import {Router} from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit{
    formulario!:FormGroup;
  

  constructor(
      private formularioB:FormBuilder,
      private authService:Auth,
      private router:Router
  ){}

  ngOnInit():void{
    this.formulario=this.formularioB.group({
    email:['',[Validators.required]],
    password:['',Validators.required]
  });
  }


  //acciones 
  login(){
    if(this.formulario.valid){
      this.authService.login(this.formulario.value).subscribe({
        next:()=> this.router.navigate(['/admin']),
        error:()=> alert('Error Credenciales incorrectas')
      });
    }
  }
}

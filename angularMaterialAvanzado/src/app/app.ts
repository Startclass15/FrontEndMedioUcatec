import { Component,ViewChild,AfterViewInit } from '@angular/core';
import {MatTableDataSource } from '@angular/material/table'
import { RouterOutlet } from '@angular/router';
//Importar la tablas dinamicas de angular material
import {MatTableModule} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';


export interface Producto{
  nombre: string;
  precio: number;
  categoria: string
}

//data
const dataProductos:Producto[]=[
  {
    nombre:"Producto 1",
    precio:1200,
    categoria:"Categoria 1"
  },
   {
    nombre:"Producto 2",
    precio:1400,
    categoria:"Categoria 2"
  },
   {
    nombre:"Producto 3",
    precio:1200,
    categoria:"Categoria 3"
  },
   {
    nombre:"Producto 4",
    precio:1200,
    categoria:"Categoria 1"
  },
   {
    nombre:"Producto 5",
    precio:1800,
    categoria:"Categoria 1"
  },
   {
    nombre:"Producto 6",
    precio:800,
    categoria:"Categoria 1"
  },
]




@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatTableModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angularMaterialAvanzado';
  implements AfterViewInit{
    columnas:string[]=["nombre","precio","categoria"];
    dataSource=new MatTableDataSource<Producto>(dataProductos);

    @ViewChild(MatPaginator) paginator!:MatPaginator;
    @ViewChild(MatSort) sort! :MatSort;

    ngAfterViewInit(){
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    }
  
  } 
}

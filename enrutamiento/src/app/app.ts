import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//Importacion de componentes de Angular Avanzado
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'; 
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'enrutamiento';
}

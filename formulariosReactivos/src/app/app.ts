import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Formularios } from './formularios/formularios';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Formularios],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'formulariosReactivos';
}

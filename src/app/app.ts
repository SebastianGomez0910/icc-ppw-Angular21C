import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from "./components/app-header/app-header";
import { Hero } from "./components/app-hero/app-hero";
import { AppFooter } from "./components/app-footer/app-footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeader, Hero, AppFooter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  title='ppw-angular-21';
  //protected readonly title = signal('ppw-angular');
  
  //isLoggedIn=false;

  //materias=['programacion', 'estructura de datos', 'base de datos']
}

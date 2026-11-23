import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JuegosComponent } from './Components/juegos/juegos.component';

@Component({
  imports: [RouterOutlet, JuegosComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Juegos');
}

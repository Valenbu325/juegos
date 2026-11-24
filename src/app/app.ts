import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MateriasComponent } from './Components/materias/materias.component';

@Component({
  imports: [RouterOutlet, MateriasComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Materias');
}

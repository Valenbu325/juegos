import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TablaComponent } from '../../Components/tabla/tabla';
import { MateriasService } from '../../Services/materias';

@Component({
  selector: 'app-materias',
  imports: [TablaComponent],
  templateUrl: './materias.html',
  styleUrl: './materias.css',
})
export class Materias {
  private readonly materiasService = inject(MateriasService);

  readonly materias = toSignal(this.materiasService.getMaterias(), { initialValue: [] });
}
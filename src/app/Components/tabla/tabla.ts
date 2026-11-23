import { Component, Input, OnChanges } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.html',
  styleUrl: './tabla.css',
  imports: [MatTableModule, TitleCasePipe],
})
export class TablaComponent implements OnChanges {
  @Input() titulo: string = '';
  @Input() data: any[] = [];

  displayedColumns: string[] = [];

  ngOnChanges(): void {
    if (this.data.length > 0) {
      this.displayedColumns = Object.keys(this.data[0]);
    } else {
      this.displayedColumns = [];
    }
  }
}
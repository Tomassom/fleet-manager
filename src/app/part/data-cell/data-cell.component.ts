import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-cell',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './data-cell.component.html',
  styleUrl: './data-cell.component.css'
})
export class DataCellComponent {

  @Input() cellValue: any;
  @Input() col: any;

}

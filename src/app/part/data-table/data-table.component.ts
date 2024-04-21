import { Component, Input, OnInit } from '@angular/core';
import { DataCellComponent } from '../data-cell/data-cell.component';
import { BaseService } from '../../service/base.service';
import { ConfigService } from '../../service/config.service';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [DataCellComponent, CommonModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent implements OnInit{

  @Input() list: any[] = [];
  @Input() cols: any[] = [];

  phraseKey: string = 'notset';
  deleteIconClass: string = 'fa fa-trash-o';
  newRow: any = {};
  columns: any[] = [];
  driver: any;

  constructor(
    private bs: BaseService,
    private ConfigService: ConfigService
  ) {}

  ngOnInit(): void {
  }

  onUpdate($event: any): void{
    alert(`hello ${$event}`);
  }
  
}

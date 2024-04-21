import { Component, NgModule, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MenuComponent } from './part/menu/menu.component';
import { DataTableComponent } from './part/data-table/data-table.component';
import { DataCellComponent } from './part/data-cell/data-cell.component';
import { BaseService } from './service/base.service';
import { ConfigService } from './service/config.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, DataTableComponent, DataCellComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'fleet-manager';
  driver: any;
  cols: any;

  constructor(
    private bs: BaseService,
    private config: ConfigService
  ) {}

  ngOnInit(): void {
    this.driver = this.bs.getAll("drivers");
    this.cols = this.config.cols.drivers;
  } 
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stock } from '../stock.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
})
export class StockListComponent implements OnInit {
  displayedColumns: string[] = [
    'mercadoria',
    'quantidade',
    'tipo',
    'fornecedor',
  ];
  private stocks: Stock[] = [];
  dataSource = new MatTableDataSource(this.stocks);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.stocks = data['stocks'];
      this.initTable();
    });
  }

  private initTable() {
    this.dataSource = new MatTableDataSource(this.stocks);
    this.dataSource.sort = this.sort;
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Price } from '../price.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
})
export class PriceListComponent implements OnInit {
  displayedColumns: string[] = [
    'mercadoria',
    'valor',
    'promocao',
    'dataInc',
    'dataFim',
  ];
  private prices: Price[] = [];
  dataSource = new MatTableDataSource(this.prices);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.prices = data['prices'];
      this.initTable();
    });
  }

  private initTable() {
    this.dataSource = new MatTableDataSource(this.prices);
    this.dataSource.sort = this.sort;
  }
}

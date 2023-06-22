import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Merchandise } from '../merchandise.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-merchandise-list',
  templateUrl: './merchandise-list.component.html',
})
export class MerchandiseListComponent implements OnInit {
  displayedColumns: string[] = [
    'nome',
    'descricao',
    'marca',
    'modelo',
    'status',
    'actions',
  ];

  private merchandises: Merchandise[] = [];
  dataSource = new MatTableDataSource(this.merchandises);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.merchandises = data['merchandises'];
      this.initTable();
    });
  }

  editProductLink(merchandise: Merchandise) {
    return '/merchandise/' + merchandise.codigo + '/edit';
  }

  changeStatus(merchandise: Merchandise) {
    merchandise.status = merchandise.status === 'ativo' ? 'inativo' : 'ativo';
  }

  private initTable() {
    this.dataSource = new MatTableDataSource(this.merchandises);
    this.dataSource.sort = this.sort;
    console.log(this.dataSource);
  }
}

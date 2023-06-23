import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  stockChart: any;
  moveChart: any;
  merchandiseChart: any;

  constructor() {}

  ngOnInit(): void {
    this.initStockChart();
    this.initMoveChart();
    this.initMerchandiseChart();
  }

  private initStockChart(): void {
    this.stockChart = new Chart('stockChart', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [
          {
            label: 'Estoque',
            data: [20, 25, 20, 50, 45, 44],
            backgroundColor: '#a60038',
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Controle de Estoque',
            align: 'start',
          },
        },
      },
    });
  }

  private initMoveChart(): void {
    this.stockChart = new Chart('moveChart', {
      type: 'pie',
      data: {
        labels: ['Entradas', 'Saidas'],
        datasets: [
          {
            data: [70, 45],
            backgroundColor: ['#3f51b5', '#a60038'],
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Entrada/Saida',
            align: 'start',
          },
        },
      },
    });
  }

  private initMerchandiseChart(): void {
    this.merchandiseChart = new Chart('merchandiseChart', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [
          {
            label: 'Mercadorias',
            data: [2, 5, 7, 1, 2, 10],
            backgroundColor: '#a60038',
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Controle de mercadorias',
            align: 'start',
          },
        },
      },
    });
  }
}

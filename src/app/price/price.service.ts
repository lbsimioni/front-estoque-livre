import { Injectable } from '@angular/core';
import { Price } from './price.model';

@Injectable({
  providedIn: 'root',
})
export class PriceService {
  private prices: Price[] = [
    {
      mercadoria: '[Cnon] Camera 1 - Novo modelo XPTO - 1232412421',
      valor: 45.0,
      promocao: 35.0,
      dataInc: '15/06/2023 21:45',
      dataFim: '21/06/2023 21:45',
    },
    {
      mercadoria: '[Cnon] Camera 1 - Novo modelo XPTO - 1232412421',
      valor: 50.0,
      promocao: 35.0,
      dataInc: '21/06/2023 21:45',
      dataFim: '-',
    },
    {
      mercadoria: '[Cnon] Camera 2 - Novo modelo XPTO - 1232412422',
      valor: 70.0,
      promocao: 65.0,
      dataInc: '21/06/2023 21:45',
      dataFim: '-',
    },
  ];

  constructor() {}

  list(): Price[] {
    return this.prices;
  }
}

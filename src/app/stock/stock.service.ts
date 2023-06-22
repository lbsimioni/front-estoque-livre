import { Injectable } from '@angular/core';
import { Stock } from './stock.model';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private estoque: Stock[] = [
    {
      mercadoria: '[Cnon] Camera 1 - Novo modelo XPTO - 1232412421',
      quantidade: 50,
      tipo: 'entrada',
      fornecedor: 'Barão fornecedores',
    },
    {
      mercadoria: '[Cnon] Camera 1 - Novo modelo XPTO - 1232412421',
      quantidade: 30,
      tipo: 'saida',
      fornecedor: 'Barão fornecedores',
    },
    {
      mercadoria: '[Cnon] Camera 1 - Novo modelo XPTO - 1232412421',
      quantidade: 20,
      tipo: 'entrada',
      fornecedor: 'Barão fornecedores',
    },
    {
      mercadoria: '[Cnon] Camera 1 - Novo modelo XPTO - 1232412421',
      quantidade: 15,
      tipo: 'saida',
      fornecedor: 'Barão fornecedores',
    },
    {
      mercadoria: '[Cnon] Camera 1 - Novo modelo XPTO - 1232412421',
      quantidade: 10,
      tipo: 'saida',
      fornecedor: 'Barão fornecedores',
    },
  ];

  constructor() {}

  list(): Stock[] {
    return this.estoque;
  }
}

import { Injectable } from '@angular/core';
import { Merchandise } from './merchandise.model';

@Injectable({
  providedIn: 'root',
})
export class MerchandiseService {
  private produtos: Merchandise[] = [
    {
      codigo: 1,
      nome: 'Camera 1',
      ncmSh: '1232412421',
      imagem:
        'https://s2-techtudo.glbimg.com/AxixvvA3-qyM4JeBdZmGeCe5HQU=/0x0:695x463/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/R/O/eOi78uRKiSX96sd00XTQ/2016-07-14-canon-7d.png',
      descricao: 'Camera modelo 1',
      categoria: 'eletronicos',
      pesoLiquido: 'nda',
      marca: 'Cnon',
      pesoBruto: '1 KG',
      modelo: 'Novo modelo XPTO',
      status: 'inativo',
    },
    {
      codigo: 2,
      nome: 'Camera 2',
      ncmSh: '1232412422',
      imagem:
        'https://s2-techtudo.glbimg.com/AxixvvA3-qyM4JeBdZmGeCe5HQU=/0x0:695x463/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/R/O/eOi78uRKiSX96sd00XTQ/2016-07-14-canon-7d.png',
      descricao: 'Camera modelo 2',
      categoria: 'eletronicos',
      pesoLiquido: 'nda',
      marca: 'Cnon',
      pesoBruto: '1 KG',
      modelo: 'Novo modelo XPTO',
      status: 'ativo',
    },
  ];

  constructor() {}

  list(): Merchandise[] {
    return this.produtos;
  }

  find(id: number): Merchandise {
    return this.produtos.find((p) => p.codigo == id);
  }
}

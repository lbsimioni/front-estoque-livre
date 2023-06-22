export interface Merchandise {
  codigo?: number;
  nome: string;
  ncmSh: string;
  imagem: string;
  descricao: string;
  categoria: string;
  pesoLiquido: string;
  marca: string;
  pesoBruto: string;
  modelo: string;
  status: 'ativo' | 'inativo';
}

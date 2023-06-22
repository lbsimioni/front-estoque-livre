export interface Stock {
  mercadoria: string;
  quantidade: number;
  tipo: 'entrada' | 'saida';
  fornecedor: string;
}

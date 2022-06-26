export class Produto {
  id!: number;
  descricao: string;
  categoria: string;
  marca: string;
  ativo: boolean;
  constructor(descricao: string, categoria: string, marca: string) {
    this.descricao = descricao;
    this.categoria = categoria;
    this.marca = marca;
    this.ativo = true;
  }
}

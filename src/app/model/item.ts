export class Item {
  id!: number;
  quantidade: number;
  comprado: boolean;
  listaId: number;
  produtoId: number;

  constructor(quantidade: number, listaId: number, produtoId: number) {
    this.quantidade = quantidade;
    this.comprado = false;
    this.listaId = listaId;
    this.produtoId = produtoId;
  }
}

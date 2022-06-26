export class Item {
  id!: number;
  quantidade!: number;
  comprado: boolean;
  listaId: number;
  produtoId!: number;

  constructor(listaId: number) {
    this.quantidade = 0;
    this.comprado = false;
    this.listaId = listaId;
    this.produtoId = 0;
  }
  toString(): string {
    return `{"quantidade":${Number(this.quantidade)},"comprado":${Boolean(
      this.comprado
    )},"listaId":${Number(
      this.listaId
    )},"produtoId":${this.produtoId.valueOf()}}`;
  }
}

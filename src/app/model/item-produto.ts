import { Item } from './item';
import { Produto } from './produto';
export class ItemProduto {
  item!: Item;
  produto!: Produto;

  constructor(item: Item, produto: Produto) {
    this.item = item;
    this.produto = produto;
  }
}

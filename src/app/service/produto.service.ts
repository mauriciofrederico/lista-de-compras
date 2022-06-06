import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import { WebStorageUtil } from 'src/app/util/web-storage-util';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  produtos!: Produto[];
  constructor() {
    this.produtos = WebStorageUtil.get(Constants.PRODUTOS_KEY);
  }

  save(produto: Produto) {
    this.produtos = WebStorageUtil.get(Constants.PRODUTOS_KEY);
    this.produtos.push(produto);
    WebStorageUtil.set(Constants.PRODUTOS_KEY, this.produtos);
  }



  getProdutos(): Produto[] {
    this.produtos = WebStorageUtil.get(Constants.PRODUTOS_KEY);
    return this.produtos;
  }
  geraID():number{
    this.produtos = WebStorageUtil.get(Constants.PRODUTOS_KEY);
    if (this.produtos.length==0){
      return 1;
    }else{
      return  this.produtos[this.produtos.length-1].id +1;
    }

  }
  getProduto(value: number): any {
    this.produtos = WebStorageUtil.get(Constants.PRODUTOS_KEY);
    for (let produto of this.produtos) {
      if (produto.id.valueOf() == value.valueOf()) {
        return produto;
      }
    }
    return null;
  }

}

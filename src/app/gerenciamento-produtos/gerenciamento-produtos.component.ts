import { Produto } from './../model/produto';
import { ProdutoService } from './../service/produto.service';
import { Component, OnInit } from '@angular/core';
import { Shared } from '../util/shared';

@Component({
  selector: 'app-gerenciamento-produtos',
  templateUrl: './gerenciamento-produtos.component.html',
  styleUrls: ['./gerenciamento-produtos.component.css']
})
export class GerenciamentoProdutosComponent implements OnInit {
  subTitulo:string;
  success = false;
  message = '';
  produtos!:Produto[];
  constructor(private produtoService:ProdutoService) {
    this.subTitulo="Gerenciamento de Produtos"
  }

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.produtos = this.produtoService.getProdutos();
  }

}

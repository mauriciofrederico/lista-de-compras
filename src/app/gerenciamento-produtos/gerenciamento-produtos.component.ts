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
    //Shared.initializeWebStorage();
    this.buscaProdutos();




  }

  onDelete(produto: Produto) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover ' + produto.descricao
    );
    if (!confirmation) {
      return;
    }
    this.produtoService
    .delete(produto.id)
    .then((p: any) => {
      this.success=true;
      this.message="Produto excluído";
      this.buscaProdutos();

    })
    .catch((e) => {
      this.success=false;
      this.message= 'Não foi possível excluir o produto';
    });
  }
  buscaProdutos(){
    this.produtoService
    .getProdutos()
    .then((p: any) => {
      this.produtos=p;
    })
    .catch(e=>{
      this.message="Problema para acessar o banco de dados";
      this.success=false;
    })
  }


}

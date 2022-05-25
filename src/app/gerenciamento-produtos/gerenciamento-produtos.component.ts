import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerenciamento-produtos',
  templateUrl: './gerenciamento-produtos.component.html',
  styleUrls: ['./gerenciamento-produtos.component.css']
})
export class GerenciamentoProdutosComponent implements OnInit {
  subTitulo:string;
  success = false;
  message = '';
  constructor() {
    this.subTitulo="Gerenciamento de Produtos"
  }

  ngOnInit(): void {
  }

}

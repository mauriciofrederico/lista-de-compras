import { Component, NgModule, OnInit } from '@angular/core';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})


export class ProdutoComponent implements OnInit {
  subTitulo:string;
  id:number;
  descricao:string;
  success = false;
  message = '';
  constructor() {
    this.subTitulo ="Cadastrar Produto";
    this.id=0;
    this.descricao="";
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.descricao==""){
      this.success = false;
      this.message = 'Favor digitar a descrição do produto';
      return false;
    }
    this.success=true;
    this.message= `Produto ${this.descricao} cadastrado com sucesso`;
    this.id=1;
        return true;
  }

  onClickLimpar(){
    this.id=0;
    this.descricao="";
    this.message="";
    window.alert("Dados Limpos")

  }

}


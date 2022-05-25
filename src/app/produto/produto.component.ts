import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})


export class ProdutoComponent implements OnInit {
  subTitulo!:string;
  id:number;

  descricao:string;
  marca:string;
  success = false;
  message = '';
  aviso="";
  constructor(private route:ActivatedRoute, private router:Router) {

    this.id=0;
    this.descricao="";
    this.marca="";
   }

  ngOnInit(): void {
    this.subTitulo ="Cadastrar Produto";
this.route.queryParams.subscribe((params)=>
{//por enquanto esta fixo
  this.subTitulo ="Alterar Produto";
  if (params['id']==1){
    this.id=1;
    this.descricao="Sabao em po";
    this.marca="OMO";
  }else if(params['id']==2){
    this.id=2;
    this.descricao="guarana";
    this.marca="antartica";
  }
})
  }

  onSubmit(){
    if (this.descricao==""){
      this.success = false;
      this.message = 'Favor digitar a descrição do produto';
      this.id=0;
      return false;
    }
    if (this.marca==""){
      this.success = false;
      this.message = 'Favor digitar a marca do produto';
      this.id=0;
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
    this.marca="";
    this.message="";
    window.alert("Dados Limpos")

  }
  onAvisoEvent(event:string){
   window.alert(event);
  }
  onErroEvent(event:string){
    window.alert(event);
   }

}


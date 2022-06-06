import { ProdutoService } from './../service/produto.service';
import { Constants } from 'src/app/util/constants';

import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from './../model/produto';
import { Shared } from '../util/shared';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})


export class ProdutoComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  subTitulo!:string;
  produto!:Produto;
  novo:boolean=true;
  success = false;
  message = '';
  aviso="";
  CATEGORIAS = Constants.CATEGORIAS;

  constructor(private route:ActivatedRoute, private router:Router, private produtoService:ProdutoService) {


   }

   ngAfterViewInit() {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
  }

  ngOnInit(): void {

    this.subTitulo ="Cadastrar Produto";
    Shared.initializeWebStorage();
    this.produto = new Produto('','','');


this.route.queryParams.subscribe((params)=>
{//por enquanto esta fixo
  if (params['id']>0){
    this.subTitulo ="Alterar Produto";
    this.produto = this.produtoService.getProduto(params['id'])
    if (this.produto==null){
      this.produto = new Produto('','','');
    }
    this.novo=false;
  }

})
  }
  onSelectChange(event: Event) {
    this.produto.categoria = (event.target as HTMLInputElement).value;
debugger
  }

  onSubmit(){
    if (this.novo){
    this.produto.id = this.produtoService.geraID();
    this.produtoService.save(this.produto);
    this.success=true;
    this.message= `Produto ${this.produto.descricao} cadastrado com sucesso`;
    }

   }

  onClickLimpar(){
    this.produto = new Produto('','','');

    this.form.reset();

  }
  onAvisoEvent(event:string){
   window.alert(event);
  }
  onErroEvent(event:string){
    window.alert(event);
   }

}


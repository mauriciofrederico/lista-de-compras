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
  styleUrls: ['./produto.component.css'],
})
export class ProdutoComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  subTitulo!: string;
  produto!: Produto;
  novo: boolean = true;
  success = false;
  message = '';
  aviso = '';
  CATEGORIAS = Constants.CATEGORIAS;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService
  ) {}

  ngAfterViewInit() {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
  }

  ngOnInit(): void {
    this.subTitulo = 'Cadastrar Produto';
    Shared.initializeWebStorage();
    this.produto = new Produto('', '', '');

    this.route.queryParams.subscribe((params) => {
      //por enquanto esta fixo
      if (params['id'] > 0) {
        this.produtoService
          .getProduto(params['id'])
          .then((p: any) => {
            this.produto = p;
            this.subTitulo = 'Alterar Produto';
            this.novo = false;
          })
          .catch((e) => {
            this.success = false;
            this.message = 'Codigo do Produto não existe. Faça uma inclusão';
          });
      }
    });
  }
  onSelectChange(event: Event) {
    this.produto.categoria = (event.target as HTMLInputElement).value;
  }

  onSubmit() {
    if (this.novo) {
      //this.produto.id = this.produtoService.geraID();

      // this.produtoService.save(this.produto);
      let p1 = this.produtoService.save(this.produto);
      Promise.all([p1])
        .then(() => {
          this.success = true;
          this.message = `Produto ${this.produto.descricao} cadastrado com sucesso`;
          this.limpar();
        })
        .catch((e) => {
          this.success = false;
          this.message = 'Não foi possível inserir o produto';
        });
    } else {
      let p1 = this.produtoService.update(this.produto);
      Promise.all([p1])
        .then(() => {
          this.success = true;
          this.message = `Produto ${this.produto.descricao} atualizado com sucesso`;
        })
        .catch((e) => {
          this.success = false;
          this.message = 'Não foi possível atualizar o produto';
        });
    }
  }

  onClickLimpar() {
    this.limpar();
  }
  onAvisoEvent(event: string) {
    window.alert(event);
  }
  onErroEvent(event: string) {
    window.alert(event);
  }
  limpar() {
    this.produto = new Produto('', '', '');
    this.form.reset();
  }
}

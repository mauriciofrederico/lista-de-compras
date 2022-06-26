import { ProdutoService } from './../service/produto.service';
import { ItemProduto } from './../model/item-produto';
import { ListaService } from './../service/lista.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../model/item';
import { Lista } from '../model/lista';
import { ItemService } from '../service/item.service';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  subTitulo!: string;
  lista!: Lista;

  itens!: ItemProduto[];
  novo: boolean = true;
  success = false;
  message = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listaService: ListaService,
    private itemService: ItemService,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    this.subTitulo = 'Cadastrar Lista';
    this.lista = new Lista('');
    this.lista.id = 0;
    this.route.queryParams.subscribe((params) => {
      if (params['id'] > 0) {
        this.listaService.getLista(params['id']).subscribe((lista: Lista) => {
          this.lista = lista;
          this.subTitulo = 'Alterar Lista';
          this.novo = false;
          this.carregaItens(params['id']);
        });
      }
    });
  }

  onSubmit() {
    if (this.novo) {
      this.listaService.save(this.lista).subscribe((lista: Lista) => {
        this.lista = lista;
        this.success = true;
        this.message = 'Lista salva com sucesso!';
      });
    } else {
      this.listaService.update(this.lista).subscribe();
      this.success = true;
      this.message = 'Lista atualizada com sucesso!';
    }
  }
  onClickLimpar() {
    this.form.reset();
    this.lista = new Lista('');
    this.lista.id = 0;
    this.novo = true;
    this.subTitulo = 'Cadastrar Lista';
    this.itens = new Array();
  }

  onDelete(item: ItemProduto) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover o item ' + item.produto.descricao
    );
    if (!confirmation) {
      return;
    }

    this.itemService.delete(item.item.id).subscribe(() => {
      this.carregaItens(this.lista.id);
      this.message = 'Item deletado com sucesso';
      this.success = true;
    });
  }

  async carregaItens(listaID: Number) {
    this.itens = new Array();
    this.itemService.getItensByListaId(listaID).subscribe((itens) => {
      for (let i = 0; i < itens.length; i++) {
        this.produtoService
          .getProduto(itens[i].produtoId)
          .then((produto: any) => {
            this.itens.push(new ItemProduto(itens[i], produto));
          });
      }
    });
  }
}

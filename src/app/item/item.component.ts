import { ProdutoService } from './../service/produto.service';
import { ItemService } from './../service/item.service';
import { Produto } from './../model/produto';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from '../model/item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  subTitulo!: string;
  success = false;
  message = '';
  item!: Item;
  produtos!: Produto[];

  constructor(
    private itemService: ItemService,
    private produtoService: ProdutoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.item = new Item(this.route.snapshot.params['id']);
    this.buscaProdutos();
  }

  buscaProdutos() {
    this.produtoService
      .getProdutosAtivos()
      .then((p: any) => {
        this.produtos = p;
      })
      .catch((e) => {
        this.message = 'Problema para acessar o banco de dados';
        this.success = false;
      });
  }
  selecionar(produto: Produto) {
    this.item.produtoId = produto.id;
    document.getElementById('quantidade')?.focus();
  }
  async onSubmit() {
    debugger;
    if (this.existeProduto()) {
      if (this.item.quantidade > 0) {
        await this.itemService
          .produtoJaCadastrado(this.item)
          .then((it: any) => {
            if (it.length > 0) {
              this.item.id = it[0].id;
            }
          });
        if (this.item.id) {
          this.itemService.update(this.item).subscribe(
            () => {
              this.message = 'Item Atualizado com sucesso';
              this.success = true;
              this.limpar();
            },
            (error) => {
              this.message = 'Problmea para atualizar o Item.';
              this.success = true;
            }
          );
        } else {
          this.itemService.save(this.item).subscribe(
            () => {
              this.message = 'Item inserido com sucesso';
              this.success = true;
              this.limpar();
            },
            (error) => {
              this.message = 'Problma para inserir o Item.';
              this.success = false;
            }
          );
        }
      } else {
        this.message = 'Favor informar uma quantidade maior que zero';
        this.success = false;
      }
    } else {
      this.message =
        'Id do produto informado inválido. Favor consultar na tabela abaixo o ID correto';
      this.success = false;
    }
  }

  onClickLimpar() {
    this.limpar();
  }

  existeProduto(): boolean {
    for (let i = 0; i < this.produtos.length; i++) {
      if (this.produtos[i].id == this.item.produtoId) {
        return true;
      }
    }
    return false;
  }
  limpar() {
    this.form.reset();
    let listaId = this.item.listaId;
    this.item = new Item(listaId);
  }
}

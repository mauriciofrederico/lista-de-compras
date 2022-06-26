import { Lista } from './../model/lista';
import { ListaService } from './../service/lista.service';
import { ProdutoService } from './../service/produto.service';
import { ItemService } from './../service/item.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ItemProduto } from '../model/item-produto';
import { Item } from '../model/item';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css'],
})
export class ChecklistComponent implements OnInit {
  lista!: Lista;
  itens!: ItemProduto[];
  subTitulo!: string;
  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private produtoService: ProdutoService,
    private listaService: ListaService
  ) {}

  ngOnInit(): void {
    this.carregaItens(this.route.snapshot.params['id']);
    this.listaService
      .getLista(this.route.snapshot.params['id'])
      .subscribe((lista) => {
        this.lista = lista;
        this.subTitulo = `Checklist - ${lista.nome}`;
      });
  }
  carregaItens(listaID: Number) {
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
  marcar(item: Item) {
    {
      item.comprado = !item.comprado;
      this.itemService.patch(item).subscribe(
        () => {},
        (error) => {
          alert(error.message);
        }
      );
    }
  }
}

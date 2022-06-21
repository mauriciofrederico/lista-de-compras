import { ListaService } from './../service/lista.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../model/item';
import { Lista } from '../model/lista';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  subTitulo!: string;
  lista!: Lista;
  itens!: Item[];
  novo: boolean = true;
  success = false;
  message = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listaService: ListaService,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    this.subTitulo = 'Cadastrar Lista';
    this.lista = new Lista('');
    this.lista.id = 0;
    this.route.queryParams.subscribe((params) => {
      if (params['id'] > 0) {
        this.listaService.getLista(params['id']).subscribe((lista: Lista) => {
          this.lista = lista;
          this.subTitulo = 'Alterar Produto';
          this.novo = false;
          this.itemService.getItensByListaId(params['id']).subscribe((itens=>{
            this.itens=itens;
          }))
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
  }
}

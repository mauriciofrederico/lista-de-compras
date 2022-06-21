import { ItemService } from './../service/item.service';
import { Lista } from './../model/lista';
import { ListaService } from './../service/lista.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-gerenciamento-listas',
  templateUrl: './gerenciamento-listas.component.html',
  styleUrls: ['./gerenciamento-listas.component.css']
})
export class GerenciamentoListasComponent implements OnInit {
  subTitulo: string;
  success = false;
  message = '';
  listas!: Lista[];
  constructor(
    private listaService: ListaService,
    private itemService: ItemService
  ) {
    this.subTitulo = 'Gerenciamento de Listas';
  }

  ngOnInit(): void {
    this.listaService.getListas().subscribe((lista: Lista[]) => {
      this.listas = lista;
    });
  }


  async onDelete(lista: Lista) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover ' + lista.nome
    );
    if (!confirmation) {
      return;
    }


    if (await this.itemService.TemItens(lista.id)==true){
      this.message ="Lista não pode ser deletada! Delete primeiro os itens da lista";
      this.success = false;
    }else{
      this.listaService.delete(lista.id).subscribe(
        ()=>{
          this.listaService.getListas().subscribe((lista: Lista[]) => {
            this.listas = lista;
          });
          this.message ="Lista deletada com sucesso";
          this.success = true;
        }

        );

    }


  }
}

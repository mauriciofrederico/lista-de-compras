import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerenciamento-listas',
  templateUrl: './gerenciamento-listas.component.html',
  styleUrls: ['./gerenciamento-listas.component.css']
})
export class GerenciamentoListasComponent implements OnInit {
  subTitulo:string;
  success = false;
  message = '';
  constructor() {
    this.subTitulo="Gerenciamento de Listas"
  }

  ngOnInit(): void {
  }

}

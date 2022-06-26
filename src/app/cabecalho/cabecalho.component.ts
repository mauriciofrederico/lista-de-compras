import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as M from 'materialize-css';
@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent implements AfterViewInit {
  @ViewChild('mobile') sideNav?: ElementRef;
  titulo: string;
  constructor() {
    this.titulo = 'Lista de Mercado - Não Esquece Nada';
  }
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    M.Sidenav.init(this.sideNav?.nativeElement);
  }
}

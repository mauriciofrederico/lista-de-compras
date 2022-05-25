import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {
  @Input()  success!: boolean;
  @Input() message!: string;
  countError: number=0;

  @Output() avisoEvent = new EventEmitter<string>();
  @Output() erroEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.message ='';
    this.success=false;


  }


  ngOnChanges(): void {

    if(this.message!=''&&this.success==false){
      this.countError++;

      if (this.countError>=3){
        setTimeout(()=>{ this.avisoEvent.emit("Preste atenção na mensagem em vermelho . Você ja errou: "+this.countError)},1000)
      }
    }
    if (this.message.includes("Carne")){
      setTimeout(()=>{ this.avisoEvent.emit("Cuidado!! Você vai ficar sem dinheiro.")},1000)

    }
    if (this.success){
      this.countError=0;
    }
  }





}

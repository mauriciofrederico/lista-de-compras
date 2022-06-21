import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from '../model/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  subTitulo!: string;
  success = false;
  message = '';
  item!:Item;
  constructor() { }

  ngOnInit(): void {
    this.item = new Item(0,0,0);
  }

}

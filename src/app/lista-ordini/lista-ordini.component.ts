import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-ordini',
  host: {class: 'router-element'},
  templateUrl: './lista-ordini.component.html',
  styleUrls: ['./lista-ordini.component.css']
})
export class ListaOrdiniComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

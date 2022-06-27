import { Component, OnInit } from '@angular/core';
import {OrdiniService} from "../../core/http/ordini.service";
import {OrdineCompatto} from "../../shared/models/ordine-compatto";
import {OrdineDettaglio} from "../../shared/models/ordine-dettaglio";

@Component({
  selector: 'app-lista-ordini',
  host: {class: 'router-element'},
  templateUrl: './lista-ordini.component.html',
  styleUrls: ['./lista-ordini.component.css']
})
export class ListaOrdiniComponent implements OnInit {

  idSessione: string = "5"
  ordiniTavolo!: OrdineDettaglio[];
  constructor(private ordiniService: OrdiniService) { }

  ngOnInit(): void {
    this.ottieniOrdiniTavolo();
    //console.log("nome: "+this.ordiniTavolo[]);
    //this.confermaOrdine();

  }

  ottieniOrdiniTavolo(): void {
    this.ordiniService.ottieniOrdiniTavolo(localStorage.getItem("numeroTavolo")!).subscribe(res => {
      console.log("ottieni ordini tavolo ");
      console.log(res)
      this.ordiniTavolo=res;
    })
  }

  /*confermaOrdine(): void {
    this.ordiniService.confermaOrdine(this.idSessione).subscribe(res => {
      console.log(res)
    })
  }*/

}

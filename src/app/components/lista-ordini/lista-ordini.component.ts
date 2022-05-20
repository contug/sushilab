import { Component, OnInit } from '@angular/core';
import {OrdiniService} from "../../core/http/ordini.service";

@Component({
  selector: 'app-lista-ordini',
  host: {class: 'router-element'},
  templateUrl: './lista-ordini.component.html',
  styleUrls: ['./lista-ordini.component.css']
})
export class ListaOrdiniComponent implements OnInit {

  idSessione: string = "0"

  constructor(private ordiniService: OrdiniService) { }

  ngOnInit(): void {
    this.ottieniOrdiniTavolo();
    this.confermaOrdine()
  }

  ottieniOrdiniTavolo(): void {
    this.ordiniService.ottieniOrdiniTavolo(this.idSessione).subscribe(res => {
      console.log(res);
    })
  }

  confermaOrdine(): void {
    this.ordiniService.confermaOrdine(this.idSessione).subscribe(res => {
      console.log(res)
    })
  }

}

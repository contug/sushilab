import { Component, OnInit } from '@angular/core';
import {OrdiniService} from "../../core/http/ordini.service";
import {OrdineDettaglio} from "../../shared/models/ordine-dettaglio";
import {ImmaginiService} from "../../core/services/immagini.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-in-arrivo',
  templateUrl: './in-arrivo.component.html',
  styleUrls: ['./in-arrivo.component.css']
})
export class InArrivoComponent implements OnInit {

  piattiInArrivo!:OrdineDettaglio[];
  hidden: boolean = true;

  constructor(private ordiniService:OrdiniService,
              public immaginiService:ImmaginiService,
              public sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.ottieniOrdiniInArrivo();
  }

  togglePanel (){
    this.hidden = !this.hidden;
  }

  ottieniOrdiniInArrivo():void{
    this.ordiniService.ottieniOrdiniInArrivo("0").subscribe(res=>{
      this.piattiInArrivo=res;
      console.log(this.piattiInArrivo);
      console.log(this.piattiInArrivo[0].piatto.numero);
    })
  }

  getImmagine(id: number):string {
    return this.immaginiService.mapImmagini.get(id)!;
  }

}

import { Component, OnInit } from '@angular/core';
import {OrdiniService} from "../../core/http/ordini.service";
import {Piatto} from "../../shared/models/piatto";
import {MenuService} from "../../core/services/menu.service";
import {OrdineDettaglio} from "../../shared/models/ordine-dettaglio";

@Component({
  selector: 'app-in-arrivo',
  templateUrl: './in-arrivo.component.html',
  styleUrls: ['./in-arrivo.component.css']
})
export class InArrivoComponent implements OnInit {

  piattiInArrivo!:OrdineDettaglio[];
  hidden: boolean = true;

  constructor(private ordiniService:OrdiniService,
              public menuService:MenuService) { }

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


}

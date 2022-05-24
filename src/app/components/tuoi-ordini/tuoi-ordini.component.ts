import {Component, OnInit} from '@angular/core';
import {OrdiniService} from "../../core/http/ordini.service";
import {MenuService} from "../../core/services/menu.service";
import {Ordine} from "../../shared/models/ordine";
import {OrdineDettaglio} from "../../shared/models/ordine-dettaglio";

@Component({
  selector: 'app-tuoi-ordini',
  templateUrl: './tuoi-ordini.component.html',
  styleUrls: ['./tuoi-ordini.component.css']
})
export class TuoiOrdiniComponent implements OnInit {

  idSessione: string = "0"
  userId: string = "personali"

  //ordiniTavolo!: OrdineDettaglio[];
  ordiniUtente!: OrdineDettaglio[];
  hidden: boolean = true;
  ordini!:Ordine[];


  constructor(private ordiniService: OrdiniService,
              public menuService:MenuService) {

  }

  ngOnInit(): void {
    this.ottieniOrdini();
    //this.ottieniOrdiniTavolo();
    this.menuService.mostraMappa();

    //this.ordini=this.menuService.listaOrdine();

    //Inserisco in un array gli ordini dell'utente della map (non ancora confermati)
    this.menuService.listaOrdiniDettaglio().subscribe(res => {
      this.ordiniUtente = res;
    })
  }


  togglePanel (){
    this.hidden = !this.hidden;
  }

  /*ottieniOrdiniTavolo(): void {
    this.ordiniService.ottieniOrdiniTavolo(this.idSessione).subscribe(res => {
      console.log(res);
      this.ordiniTavolo=res;
    })
  }*/

  /*confermaOrdine(){
    this.ordiniUtente=this.menuService.listaOrdiniDettaglio();
    this.ordiniService.confermaOrdine("abc");
  }*/

  ottieniOrdini(): void {
    this.ordiniService.ottieniOrdiniUtente(this.idSessione, this.userId).subscribe(res => {
      console.log(res);
    })
  }

}

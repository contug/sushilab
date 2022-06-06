import { Component, OnInit } from '@angular/core';
import {PreferitiHttpService} from "../../core/http/preferiti-http.service";
import {PiattoUtente} from "../../shared/models/piatto-utente";
import {MenuHttpService} from "../../core/http/menu-http.service";
import {Piatto} from "../../shared/models/piatto";
import {ImmaginiService} from "../../core/services/immagini.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.css']
})
export class PreferitiComponent implements OnInit {

  hidden: boolean = true;
  preferiti!:Piatto[];
  piattiPreferiti:Piatto[]=[];



  constructor(private preferitiHttpService:PreferitiHttpService,
              private menuService:MenuHttpService,
              private immaginiService:ImmaginiService,
              public sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {

    //riceve array di piattiUtente
    this.ottieniPreferiti();


  }


  ottieniPreferiti(){
    this.preferitiHttpService.ottieniPreferiti(0).subscribe(res=>{
      this.preferiti=res; //array di Piatto
      console.log(this.preferiti)
    });
  }

  aggiungiRimuoviDaiPreferiti(idUtente: number, piatto: Piatto) {
    if (!piatto.preferito) {
      console.log("piatto non preferito, viene aggiunto")
      piatto.preferito=true
      console.log(piatto)
      this.preferitiHttpService.aggiungiAiPreferiti(idUtente, piatto)
    }
    else {
      console.log("piatto preferito, viene rimosso")
      piatto.preferito=false
      console.log(piatto)
      this.preferitiHttpService.rimuoviDaiPreferiti(idUtente, piatto)
    }
  }

  togglePanel (){
    this.hidden = !this.hidden;
  }


  getImmagine(id: number):string {
    return this.immaginiService.mapImmagini.get(id)!;
  }

  intValue(num:number): number {
    return Math.trunc(num);
  }

  diffValue(num:number): number {
    return 5-Math.trunc(num);
  }


}

import {Component, OnInit} from '@angular/core';
import {PreferitiHttpService} from "../../core/http/preferiti-http.service";
import {PiattoUtente} from "../../shared/models/piatto-utente";
import {MenuHttpService} from "../../core/http/menu-http.service";
import {Piatto} from "../../shared/models/piatto";
import {ImmaginiService} from "../../core/services/immagini.service";
import {DomSanitizer} from "@angular/platform-browser";
import {PiattoUtenteB} from "../../shared/models/PiattoUtenteB";
import {MenuService} from "../../core/services/menu.service";

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.css']
})
export class PreferitiComponent implements OnInit {

  hidden: boolean = true;
  preferiti!: Piatto[];
  piattiPreferiti: PiattoUtenteB[] = [];


  constructor(private immaginiService: ImmaginiService,
              private preferitiHttpService: PreferitiHttpService,
              public menuService: MenuService,
              public menuHttpService: MenuHttpService,
              public sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {

    //riceve array di piattiUtente
    this.ottieniPreferiti();


  }


  ottieniPreferiti() {
    this.preferitiHttpService.getAllPreferiti().subscribe(res => {
      this.preferiti = res;
      console.log(res);
    })
  }

  /*aggiungiRimuoviDaiPreferiti(idUtente: number, piatto: Piatto) {
    if (!piatto.preferito) {
      console.log("piatto non preferito, viene aggiunto")
      piatto.preferito = true
      console.log(piatto)
      this.preferitiHttpService.aggiungiAiPreferiti(piatto)
    } else {
      console.log("piatto preferito, viene rimosso")
      piatto.preferito = false
      console.log(piatto)
      this.preferitiHttpService.rimuoviDaiPreferiti(piatto)
    }
  }*/

  togglePanel() {
    this.hidden = !this.hidden;
  }


  getImmagine(id: number): string {
    return this.immaginiService.mapImmagini.get(id)!;
  }

  intValue(num: number): number {
    return Math.trunc(num);
  }

  diffValue(num: number): number {
    return 5 - Math.trunc(num);
  }

  modificaPreferito(piatto: Piatto) {
    if (this.menuService.getPreferito(piatto)) {
      this.preferitiHttpService.rimuoviDaiPreferiti(piatto, 1)
    } else {
      this.preferitiHttpService.aggiungiAiPreferiti(piatto, 1);
    }
  }

  compare(a: Piatto, b: Piatto) {
    if (a.numero < b.numero) {
      return -1;
    }
    if (a.numero > b.numero) {
      return 1;
    }
    return 0;
  }


}

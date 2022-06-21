import {Injectable} from '@angular/core';
import {Piatto} from "../../shared/models/piatto";
import {OrdineDettaglio} from "../../shared/models/ordine-dettaglio";
import {MenuHttpService} from "../http/menu-http.service";
import {Observable} from "rxjs";
import {Menu} from "../../shared/models/menu";
import {PiattoUtente} from "../../shared/models/piatto-utente";
import {RecensioniHttpService} from "../http/recensioni-http.service";
import {ValutazioneUtente} from "../../shared/models/valutazione-utente";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  map!: Map<number, number>;
  mapNote: Map<Piatto, string> = new Map<Piatto, string>();
  mapOrdini!: Map<Piatto, number>;
  valutazioniUtente : ValutazioneUtente[] = [];



  constructor(private recensioniHttpService : RecensioniHttpService) {
  }


  mapInit() : void {
    console.log(this.map)
    if( this.map == undefined )
      this.map =  new Map<number, number>();
    if(this.mapOrdini == undefined)
      this.mapOrdini = new Map<Piatto, number>();

    console.log(this.map)
  }

  getValue(idPiatto: number): number {
    if (this.map.has(idPiatto))
      return this.map.get(idPiatto)!;
    else
      return 0;
  }

  mostraMappa(){
    console.log("mappa");
    console.log(this.map);
    console.log(this.mapOrdini)
  }
  pulisciMappe(){
    this.mapOrdini.clear()
    this.map.clear()
  }

  /*listaOrdine(): Ordine[] {
    let listaOrdini: Ordine[] = [];
    this.map.forEach((value, key) => {
      let ordine: Ordine = new Ordine();
      ordine.idPiatto = key.id;
      ordine.count = value;
      if( this.mapNote.has(key.id))
        ordine.note = this.mapNote.get(key.id)!;
      listaOrdini.push(ordine);
    })
    console.log(listaOrdini);
    return listaOrdini;
  }*/



  listaOrdiniDettaglio() : Observable<OrdineDettaglio[]> {
    let obs : Observable<OrdineDettaglio[]>= new Observable(observer => {
      let listaOrdini : OrdineDettaglio[] = [];
      this.mapOrdini.forEach((value, key) => {
        let ordine: OrdineDettaglio = new OrdineDettaglio();
        ordine.piatto = key;
        ordine.molteplicita = value;
        ordine.note="";
        listaOrdini.push(ordine);
      })
      observer.next(listaOrdini);
    })
    return obs;
  }




 /* listaOrdiniDettaglio(): OrdineDettaglio[] {
    let listaOrdini: OrdineDettaglio[] = [];
    this.mapOrdini.forEach((value, key) => {
      let ordine: OrdineDettaglio = new OrdineDettaglio();
      ordine.piatto = key;
      ordine.molteplicita = value;
      /!*if( this.mapNote.has(key.id))
        ordine.note = this.mapNote.get(key.id)!;*!/
      listaOrdini.push(ordine);
    })
    console.log("lista ordini in dettaglio:");
    console.log(listaOrdini);
    return listaOrdini;
  }*/

  modificaOrdine(piatto: Piatto, button: boolean, limite: number): void {
    let idPiatto = piatto.id;
    if(button) {
      if(this.map.has(idPiatto)) {
        console.log("mappa ha il piatto")
        let value = this.map.get(idPiatto)!;
        if(value >= limite) {
          console.log("limite raggiunto");
        }
        else {
          this.map.set(idPiatto, value + 1);
          this.mapOrdini.forEach((value, key) => {
            if(key.id == piatto.id)
              this.mapOrdini.delete(key);
          });
          this.mapOrdini.set(piatto, value+1); //qui c'è il problema
        }
      }
      else {
        console.log("la mappa non ha il piatto")
        console.log(idPiatto)
        this.map.set(idPiatto, 1);
        this.mapOrdini.set(piatto,1);
      }
    }
    else {
      console.log(this.mapOrdini)
      if(this.map.has(idPiatto)) {
        let value = this.map.get(idPiatto)!;
        if(value > 1) {
          console.log("ramo")
          this.map.delete(idPiatto)
          this.map.set(idPiatto, value - 1);

          this.mapOrdini.forEach((value, key) => {
            if(key.id == idPiatto)
              this.mapOrdini.delete(key);
          });

          this.mapOrdini.set(piatto, value - 1);
        }
        else if(value === 1) {
          this.map.delete(idPiatto);
          this.mapOrdini.forEach((value, key) => {
            if(key.id == idPiatto)
              this.mapOrdini.delete(key);
          });
          console.log("map ordini")
          console.log(this.mapOrdini);
          console.log("mapOrdini dopo delete")
          console.log(this.mapOrdini)
        }
      }
      else {
        console.log("il piatto è già assente dall'ordine")
      }

    }
    console.log(this.map)
    console.log(this.mapOrdini)
  }




  getValutazioni() {
    this.recensioniHttpService.getRecensioniUtente().subscribe(res => {
      this.valutazioniUtente = res;
    })
  }

  getValutazione(idPiatto : number) {
    let val = this.valutazioniUtente.find(i => i.idPiatto === idPiatto);
    if(val == undefined) {
      return 0;
    }
    else
      return val.valutazione;
  }



}


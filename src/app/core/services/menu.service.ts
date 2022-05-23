import {Injectable} from '@angular/core';
import {Piatto} from "../../shared/models/piatto";
import {Ordine} from "../../shared/models/ordine";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  map: Map<Piatto, number> = new Map<Piatto, number>();
  mapNote: Map<number, string> = new Map<number, string>();

  constructor() {
  }

  getValue(piatto: Piatto): number {
    if (this.map.has(piatto))
      return this.map.get(piatto)!;
    else
      return 0;
  }

  listaOrdine(): Ordine[] {
    let listaOrdini: Ordine[] = [];
    this.map.forEach((value, key) => {
      let ordine: Ordine = new Ordine();
      ordine.idPiatto = key.id;
      ordine.count = value;
      if( this.mapNote.has(key.id))
        ordine.note = this.mapNote.get(key.id)!;
      listaOrdini.push(ordine);
    })
    return listaOrdini;
  }

  modificaOrdine(piatto: Piatto, button: boolean): void {
    if(button) {
      if(this.map.has(piatto)) {
        let value = this.map.get(piatto)!;
        if(value >= piatto.limite) {
          console.log("limite raggiunto per piatto: " + piatto.nome);
        }
        else {

          this.map.set(piatto, value + 1);
        }
      }
      else {
        this.map.set(piatto, 1);
      }
    }
    else {
      if(this.map.has(piatto)) {
        let value = this.map.get(piatto)!;
        if(value > 1) {
          this.map.set(piatto, value - 1);
        }
        else if(value == 1) {
          this.map.delete(piatto);
        }
      }
      else {
        console.log("il piatto è già assente dall'ordine")
      }

    }
    console.log(this.map)
  }


}
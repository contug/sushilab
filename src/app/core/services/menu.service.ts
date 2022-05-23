import {Injectable} from '@angular/core';
import {Piatto} from "../../shared/models/piatto";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  map: Map<Piatto, number> = new Map<Piatto, number>();

  constructor() {
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
  }


}

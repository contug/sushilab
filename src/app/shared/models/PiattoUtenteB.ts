import {Utente} from "./utente";
import {PiattoUtenteKey} from "./PiattoUtenteKey";

export class PiattoUtenteB {
  id! : PiattoUtenteKey;
  utente! : Utente;
  valutazioneUtente! : number;
  preferito!: boolean;
  ultimoOrdine! : string;
}

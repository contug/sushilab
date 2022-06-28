import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Constants} from "../../../assets/constants";
import {Ordine} from "../../shared/models/ordine";
import {OrdineDettaglio} from "../../shared/models/ordine-dettaglio";
import {OrdineConfermato} from "../../shared/models/ordine-confermato";

@Injectable({
  providedIn: 'root'
})
export class OrdiniService {

  url: string = Constants.ROOT_URL + "/tavolo/"

  constructor(private http: HttpClient) {
  }

  public ottieniOrdiniTavolo(id: string): Observable<OrdineDettaglio[]> {
    return this.http.get<OrdineDettaglio[]>(this.url + id + "/ordini");
    //return this.http.get<OrdineDettaglio[]>("https://stoplight.io/mocks/contug/sushilab/60738524/tavolo/{idTavolo}/ordini");
  }

  public confermaOrdine(idTavolo: string, idUtente: string, listaOrdini: OrdineConfermato[]): Observable<any> {
    return this.http.post(this.url + idUtente,
      listaOrdini);
  }

  /*public ottieniOrdiniUtente(id: string, idUtente: string): Observable<Piatto[]> {
    return this.http.get<Piatto[]>(this.url + id + "/" + idUtente)
  }*/

  public ottieniOrdiniInArrivo(): Observable<OrdineDettaglio[]> {
    return this.http.get<OrdineDettaglio[]>(this.url + "personali/" + localStorage.getItem("idUtente") )
  }

  public getOrdini(): Observable<Ordine[]> {
    return this.http.get<Ordine[]>(this.url + "/tavolo/0/personali")
  }

  public eliminaOrdineArrivato(ordine: OrdineDettaglio) {
    return this.http.delete(this.url +"del/" + localStorage.getItem("idUtente") + "/" + ordine.piatto.id,
      {
        body: ordine
      })
  }

  public aggiornaOrdineArrivato(ordine: OrdineDettaglio) {
    return this.http.put(this.url + "upd/" + localStorage.getItem("idUtente") + "/" + ordine.piatto.id,
      {
        body: ordine
      })
  }


}


/* "piatto": {
          "id": ordine.piatto.id,
          "numero": ordine.piatto.numero,
          "variante": ordine.piatto.variante,
          "nome": ordine.piatto.nome,
          "prezzo": ordine.piatto.prezzo,
          "allergeni": {},
          "ingredienti": {},
          "limite": ordine.piatto.limite,
          "valutazioneMedia": ordine.piatto.valutazioneMedia,
          "valutazioneUtente": ordine.piatto.valutazioneUtente,
          "preferito": ordine.piatto.preferito,
          "popolare": ordine.piatto.popolare,
          "consigliato": ordine.piatto.consigliato,
          "immagine": ordine.piatto.immagine,
          "alt": ordine.piatto.alt
        }*/

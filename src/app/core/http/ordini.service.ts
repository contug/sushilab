import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Constants} from "../../../assets/constants";
import {Ordine} from "../../shared/models/ordine";
import {OrdineDettaglio} from "../../shared/models/ordine-dettaglio";

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

  public confermaOrdine(idTavolo: string, idUtente:string, ordine:OrdineDettaglio): Observable<any> {
    console.log(ordine)
    return this.http.post(this.url + idTavolo+"/"+idUtente + "/personali",
      {
        "piatto": {
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
        },
        "molteplicita": ordine.molteplicita,
        "note": ordine.note
      }
      );

  }

  /*public ottieniOrdiniUtente(id: string, idUtente: string): Observable<Piatto[]> {
    return this.http.get<Piatto[]>(this.url + id + "/" + idUtente)
  }*/

  public ottieniOrdiniInArrivo(id: string): Observable<OrdineDettaglio[]> {
    return this.http.get<OrdineDettaglio[]>(this.url + id + "/inarrivo")
  }

  public getOrdini() : Observable<Ordine[]> {
    return this.http.get<Ordine[]>(this.url + "/tavolo/0/personali")
  }

  public eliminaOrdineArrivato(ordine: OrdineDettaglio, id:string){
    return this.http.delete(this.url+id+"/inarrivo",
      {
        body: ordine
      })
  }

  public aggiornaOrdineArrivato(ordine: OrdineDettaglio, id:string){
    return this.http.put(this.url+id+"/inarrivo",
      {
        body: ordine
      })
  }



}



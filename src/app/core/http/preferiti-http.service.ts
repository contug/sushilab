import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constants} from "../../../assets/constants";
import {PiattoUtente} from "../../shared/models/piatto-utente";
import {Observable} from "rxjs";
import {Piatto} from "../../shared/models/piatto";

@Injectable({
  providedIn: 'root'
})
export class PreferitiHttpService {



  constructor(private http:HttpClient) {
  }

  public ottieniPreferiti(idUtente:number):Observable<Piatto[]> {
    return this.http.get<Piatto[]>(Constants.ROOT_URL+"/tavolo/"+idUtente+"/preferiti");
  }

  public aggiungiAiPreferiti(idUtente: number, piatto: Piatto) {
    this.http.post(Constants.ROOT_URL + "/tavolo/" + idUtente + "/preferiti", {
      "id": piatto.id,
      "numero": piatto.numero,
      "variante": piatto.variante,
      "nome": piatto.nome,
      "prezzo": piatto.prezzo,
      "allergeni": piatto.allergeni,
      "ingredienti": piatto.ingredienti,
      "limite": piatto.limite,
      "valutazioneMedia": piatto.valutazioneMedia,
      "valutazioneUtente": piatto.valutazioneUtente,
      "preferito": piatto.preferito,
      "popolare": piatto.popolare,
      "consigliato": piatto.consigliato,
      "immagine": piatto.immagine,
      "alt": piatto.alt
    })
  }

  public rimuoviDaiPreferiti(idUtente:number, piatto:Piatto){
    this.http.delete(Constants.ROOT_URL+"/tavolo/"+idUtente+"/preferiti",
      {body:
          {
            "id": piatto.id,
            "numero": piatto.numero,
            "variante": piatto.variante,
            "nome": piatto.nome,
            "prezzo": piatto.prezzo,
            "allergeni": piatto.allergeni,
            "ingredienti": piatto.ingredienti,
            "limite": piatto.limite,
            "valutazioneMedia": piatto.valutazioneMedia,
            "valutazioneUtente": piatto.valutazioneUtente,
            "preferito": piatto.preferito,
            "popolare": piatto.popolare,
            "consigliato": piatto.consigliato,
            "immagine": piatto.immagine,
            "alt": piatto.alt
          }
      })

  }

}

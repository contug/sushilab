import { Injectable } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../../../assets/constants";
import {Observable} from "rxjs";
import {ValutazioneUtente} from "../../shared/models/valutazione-utente";

@Injectable({
  providedIn: 'root'
})
export class RecensioniHttpService {

  valutazione = 0;


  constructor(private authService: AuthService, private http : HttpClient) { }

  postRecensione(idPiatto:number, valutazione: number): Observable<any>  {
    console.log("id utente in recensioniHttpService " + localStorage.getItem('idUtente'))
    return this.http.post<any>(Constants.ROOT_URL + "/valutazione/" + localStorage.getItem('idUtente') + "/"
    + idPiatto, valutazione);
  }

  getRecensioneUtente(idPiatto: number): Observable<number> {
    return this.http.get<number>(Constants.ROOT_URL + "/valutazione/" + localStorage.getItem('idUtente') + "/"
      + idPiatto)
  }

  getRecensioniUtente() : Observable<ValutazioneUtente[]> {
    return this.http.get<ValutazioneUtente[]>(Constants.ROOT_URL + "/tavolo/valutazioni/" + localStorage.getItem('idUtente'));

  }

  getRecensioneMedia(idPiatto: number): Observable<number> {
    return this.http.get<number>(Constants.ROOT_URL + "/valutazione/" + idPiatto);
  }
}

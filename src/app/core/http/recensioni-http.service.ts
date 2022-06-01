import { Injectable } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../../../assets/constants";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecensioniHttpService {

  constructor(private authService: AuthService, private http : HttpClient) { }

  postRecensione(idPiatto:number, valutazione: number)  {
    this.http.post(Constants.ROOT_URL + "/valutazione/" + this.authService.utente.idUtente + "/"
    + idPiatto, valutazione);
  }

  getRecensioneUtente(idPiatto: number): Observable<number> {
    return this.http.get<number>(Constants.ROOT_URL + "/valutazione/" + this.authService.utente.idUtente + "/"
      + idPiatto)
  }

  getRecensioneMedia(idPiatto: number): Observable<number> {
    return this.http.get<number>(Constants.ROOT_URL + "/valutazione/" + idPiatto);
  }
}

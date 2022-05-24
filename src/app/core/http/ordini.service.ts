import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OrdineCompatto} from "../../shared/models/ordine-compatto";
import {Constants} from "../../../assets/constants";
import {Piatto} from "../../shared/models/piatto";
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

  public confermaOrdine(id: string): Observable<any> {
    return this.http.post(this.url + id + "/ordini", "");
  }

  public ottieniOrdiniUtente(id: string, idUtente: string): Observable<Piatto[]> {
    return this.http.get<Piatto[]>(this.url + id + "/" + idUtente)
  }

  public modificaOrdiniUtente(id: string, idUtente: string, ordini: Ordine[]): Observable<any> {
    return this.http.post(this.url + id + "/" + idUtente, ordini)
  }

  public ottieniOrdiniInArrivo(id: string): Observable<Piatto[]> {
    return this.http.get<Piatto[]>(this.url + id + "/inarrivo")
  }

  public getOrdini() : Observable<Ordine[]> {
    return this.http.get<Ordine[]>(this.url + "/tavolo/0/personali")
  }



}



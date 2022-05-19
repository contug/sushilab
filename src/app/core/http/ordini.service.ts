import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OrdineCompatto} from "../../shared/models/ordine-compatto";
import {Constants} from "../../../assets/constants";
import {Piatto} from "../../shared/models/piatto";

@Injectable({
  providedIn: 'root'
})
export class OrdiniService {

  url: string = Constants.ROOT_URL + "/tavolo/"

  constructor(private http: HttpClient) { }

  public ottieniOrdiniTavolo(id:string): Observable<OrdineCompatto[]> {
    return this.http.get<OrdineCompatto[]>(this.url + id + "/ordini");
  }

  public confermaOrdine(id:string): void {
    this.http.post(this.url + id + "/ordini", "");
  }

  public ottieniOrdiniUtente(id:string, idUtente:string): Observable<Piatto[]> {
    return this.http.get<Piatto[]>(this.url + id + "/" + idUtente)
  }
}

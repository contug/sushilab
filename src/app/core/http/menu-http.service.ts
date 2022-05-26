import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Menu} from "../../shared/models/menu";
import { Observable} from "rxjs";
import {Constants} from "../../../assets/constants";
import {OrdineDettaglio} from "../../shared/models/ordine-dettaglio";
import {Piatto} from "../../shared/models/piatto";

@Injectable({
  providedIn: 'root'
})
export class MenuHttpService {

  url : string = Constants.ROOT_URL;

  constructor(private http: HttpClient) { }

  public ottieniMenu():Observable<Menu[]> {
    return this.http.get<Menu[]>(this.url + "/menu/0")
  }

  public getOrdini() : Observable<OrdineDettaglio[]> {
    return this.http.get<OrdineDettaglio[]>(this.url + "/tavolo/0/personali")
  }

  public postCountOrdine(ordine : OrdineDettaglio) : void {
    this.http.post(this.url + "/tavolo/0/personali", ordine);
  }

  public ottieniPiatto(idPiatto:number): Observable<Piatto>{
    return this.http.get<Piatto>(this.url+"/menu/0/piatto/"+idPiatto);
  }
}

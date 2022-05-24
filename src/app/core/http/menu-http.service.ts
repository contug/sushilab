import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Menu} from "../../shared/models/menu";
import { Observable} from "rxjs";
import {Constants} from "../../../assets/constants";
import {OrdineDettaglio} from "../../shared/models/ordine-dettaglio";

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
}

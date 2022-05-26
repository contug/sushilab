import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constants} from "../../../assets/constants";
import {PiattoUtente} from "../../shared/models/piatto-utente";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PreferitiHttpService {

  url:string=Constants.ROOT_URL+"/tavolo/"

  constructor(private http:HttpClient) {
  }

  public ottieniPreferiti(id:string):Observable<PiattoUtente[]> {
    return this.http.get<PiattoUtente[]>(this.url+id+"/preferiti");
  }

  public aggiungiAiPreferiti(){

  }

  public rimuoviDaiPreferiti(){
  }

}

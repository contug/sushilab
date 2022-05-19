import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Tavolo } from "./model/tavolo.model";

@Injectable({
  providedIn: 'root'  //root quindi in tutti i componenti
})

export class MenuService{

  //private user= new Subject<string>();

  //in questo modo posso fare subscribe
  //userChanged$ = this.user.asObservable();

  constructor(public http: HttpClient){

  }

  downloadTavolo(): Observable<Tavolo>{

    return this.http.get<Tavolo>('https://stoplight.io/mocks/iota97/sushilab/56601714/tavolo/0');

  }

  /*downloadSinglePlayer(id:any):Observable<Player>{
    return this.http.get<Player>('http://localhost:8080/players/'+id);
  }*/


  //gli passo un giocatore e chiama la funzione next
  /*changePlayer(p:string){
      this.user.next(p);
  }*/
}

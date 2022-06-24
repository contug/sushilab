import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Constants} from "../../../assets/constants";
import {Ingrediente} from "../../shared/models/ingrediente";

@Injectable({
  providedIn: 'root'
})
export class BlacklistHttpService {

  constructor(public http:HttpClient) {

  }

  ottieniIngredienti():Observable<Ingrediente[]>{
    return this.http.get<Ingrediente[]>(Constants.ROOT_URL+'/ingredienti');
  }

  ottieniBlacklist():Observable<Ingrediente[]>{
    return this.http.get<Ingrediente[]>(Constants.ROOT_URL+'/blacklist/'+ localStorage.getItem("idUtente"));
  }

  aggiornaBlacklist(ingredienti:string[]):Observable<string>{
    return this.http.post<string>(
      Constants.ROOT_URL+'/blacklist',
      {
        "ingredienti": ingredienti,
      }
    )
  }

  aggiungiIngredientiBlacklist(ingredienti:Ingrediente[]): Observable<any[]>{
    console.log(ingredienti)
    return this.http.post<any>(Constants.ROOT_URL+"/blacklist/"+ localStorage.getItem("idUtente"),ingredienti)
  }

  eliminaDallaBlacklist(ingrediente: string) {
    console.log(ingrediente)
    this.http.delete<string>(
      Constants.ROOT_URL + "/blacklist/" + localStorage.getItem("idUtente"),
      {
        body: {
          "nome": ingrediente
        }
      }
    ).subscribe()
  }




}

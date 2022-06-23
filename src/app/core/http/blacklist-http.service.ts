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

  aggiungiIngredienteBlacklist(ingrediente:string):Observable<string>{
    console.log(ingrediente)
    return this.http.post<string>(
      Constants.ROOT_URL+"/blacklist/"+"0",
      {
        "ingrediente": ingrediente
      })
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

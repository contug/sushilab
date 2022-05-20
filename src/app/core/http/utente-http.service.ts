import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constants} from "../../../assets/constants";
import {Observable} from "rxjs";
import {Utente} from "../../shared/models/utente";

@Injectable({
  providedIn: 'root'
})
export class UtenteHttpService {

  constructor(public http:HttpClient) {

  }

  /*registraUtente(email:string, password:string){
      this.http.post(Constants.ROOT_URL+'/utente',
        {
            "email":email,
            "password":password,
        });
      //console.log("post fatta")
  }*/

  registraUtente(utente:Utente):Observable<string>{
    return this.http.post<string>(Constants.ROOT_URL+'/utente',
      {
        "email":utente.email,
        "password":utente.password,
      });
    //console.log("post fatta")
  }

  ottieniUtente():Observable<Utente>{
    return this.http.get<Utente>(Constants.ROOT_URL+'/utente');
  }

  loginUtente(utente:Utente):Observable<string>{
    return this.http.post<string>(
      Constants.ROOT_URL+'/login',
      {
        "email":utente.email,
        "password":utente.password,
      }
    )

  }
}


import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Constants} from "../../../assets/constants";

@Injectable({
  providedIn: 'root'
})
export class BlacklistHttpService {

  constructor(public http:HttpClient) {

  }

  ottieniBlacklist():Observable<string[]>{
    return this.http.get<string[]>(Constants.ROOT_URL+'/blacklist/'+0);
  }

  aggiornaBlacklist(ingredienti:string[]):Observable<string>{
    return this.http.post<string>(
      Constants.ROOT_URL+'/blacklist',
      {
        "ingredienti": ingredienti,
      }
    )
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constants} from "../../../assets/constants";
import {Observable} from "rxjs";
import {Tavolo} from "../../shared/models/tavolo";

@Injectable({
  providedIn: 'root'
})
export class CreaSessioneHttpService {


  constructor(public http:HttpClient) {
  }

  creaSessione():Observable<string>{
      return this.http.post<string>(Constants.ROOT_URL+'/tavolo','');
  }

  ottieniSessione(id: string):Observable<Tavolo>{
    return this.http.get<Tavolo>(Constants.ROOT_URL+'/tavolo/' + id);
  }

}

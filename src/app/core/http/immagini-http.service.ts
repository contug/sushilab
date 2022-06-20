import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Constants} from "../../../assets/constants";
import {Immagine} from "../../shared/models/Immagine";

@Injectable({
  providedIn: 'root'
})
export class ImmaginiHttpService {


  constructor(private http:HttpClient) {}

  public ottieniImmagine(id:number):Observable<Immagine>{
    return this.http.get<Immagine>(Constants.ROOT_URL+"/img/"+"1")
  }
}

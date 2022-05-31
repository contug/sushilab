import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Constants} from "../../../assets/constants";

@Injectable({
  providedIn: 'root'
})
export class ImmaginiHttpService {


  constructor(private http:HttpClient) {}

  public ottieniImmagine(id:number):Observable<Blob>{
    return this.http.get<Blob>(Constants.ROOT_URL+"/img/"+id)
  }
}

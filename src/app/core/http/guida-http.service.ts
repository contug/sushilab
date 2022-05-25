import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Allergene} from "../../shared/models/allergene";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../../../assets/constants";

@Injectable({
  providedIn: 'root'
})
export class GuidaHttpService {

  constructor(private http: HttpClient) { }

  getAllergeni() : Observable<Allergene[]> {
    return this.http.get<Allergene[]>(Constants.ROOT_URL + "/guida")
  }

}

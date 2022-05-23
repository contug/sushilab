import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Menu} from "../../shared/models/menu";
import { Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MenuHttpService {

  constructor(private http: HttpClient) { }

  public ottieniMenu():Observable<Menu[]> {
    return this.http.get<Menu[]>("https://stoplight.io/mocks/contug/sushilab/60738524/menu/0")
  }
}

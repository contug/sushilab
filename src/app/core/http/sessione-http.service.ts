import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constants} from "../../../assets/constants";
import {Observable} from "rxjs";
import {Tavolo} from "../../shared/models/tavolo";
import {QrService} from "../services/qr.service";

@Injectable({
  providedIn: 'root'
})
export class SessioneHttpService {


  constructor(public http:HttpClient,
              private qrService : QrService) {
  }

  creaSessione(qrCode: string, idTavolo: number):Observable<string>{
      return this.http.post<string>(Constants.ROOT_URL+'/tavolo/qr/' + idTavolo + "/" + localStorage.getItem("idUtente"), {body : qrCode});
  }

  ottieniSessione(id: string):Observable<Tavolo>{
    return this.http.get<Tavolo>(Constants.ROOT_URL+'/tavolo/qr/' + id + "/" + localStorage.getItem("idUtente"));
  }

  checkSessione(id: string) : Observable<any> {
    return this.http.get<any>(Constants.ROOT_URL + '/tavolo/qr/' + id, {observe: "response"});
  }

  chiudiSessione(idTavolo: string): Observable<any> {
    return this.http.delete<any>(Constants.ROOT_URL +'/tavolo/qr/' + parseInt(idTavolo));
  }
}

import {Injectable} from '@angular/core';
import {shareReplay} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {JsonWebToken} from "./json-web-token";
import moment from 'moment';
import {Constants} from "../../../assets/constants";
import {Utente} from "../../shared/models/utente";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public utente = new Utente();

  constructor(private http: HttpClient) {
  }


  login(email: string, password: string) {
    return this.http.post<JsonWebToken>(Constants.ROOT_URL + '/login', {email, password}).pipe(shareReplay());
  }

  registra(email: string, password: string) {
    return this.http.post<JsonWebToken>(Constants.ROOT_URL + '/registra', {email, password}).pipe(shareReplay());
  }

  public setSession(jsonWebToken: JsonWebToken) {

    localStorage.setItem('token', jsonWebToken.token);


    this.utente.idUtente = jsonWebToken.idUtente
  }

  logout(): void {
    localStorage.removeItem("token");
  }


}

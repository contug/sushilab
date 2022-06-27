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
    localStorage.setItem('expiresAt', JSON.stringify(moment().add(7200, 'second').valueOf()));

    console.log("auth.setSession idUtente dal token: " + jsonWebToken.idUtente);
    this.utente.idUtente = jsonWebToken.idUtente;
    localStorage.setItem('idUtente', jsonWebToken.idUtente.toString());
    console.log("auth.utente.idUtente: " + this.utente.idUtente);

  }

  public isLoggedIn() : boolean {
    if (localStorage.getItem('expiresAt')) {
      if(moment().isBefore(JSON.parse(localStorage.getItem('expiresAt')!)))
        return true;
      else
        return false;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem("token");
    localStorage.removeItem('expiresAt');
  }


}

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
    const expiresAt = moment().add(jsonWebToken.expiresIn, 'second');

    localStorage.setItem('id_token', jsonWebToken.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));

    this.utente.idUtente = jsonWebToken.idToken;
  }

  logout(): void {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  isLoggedIn(): boolean {
    const scadenza = localStorage.getItem("expires_at");
    if (scadenza == null)
      return false;
    else
      return moment().isBefore(moment(JSON.parse(scadenza)));
  }
}

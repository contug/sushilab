import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constants} from "../../../assets/constants";
import {PiattoUtente} from "../../shared/models/piatto-utente";
import {Observable} from "rxjs";
import {Piatto} from "../../shared/models/piatto";
import {PiattoUtenteB} from "../../shared/models/PiattoUtenteB";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PreferitiHttpService {

  preferitiUtente: PiattoUtenteB[] = [];


  constructor(private http: HttpClient,
              private router : Router) {
    this.preferitiInit()
  }

  preferitiInit() {
    this.getPreferiti().subscribe(res => {
      this.preferitiUtente = res;
    })
  }

  public getPreferiti() : Observable<PiattoUtenteB[]> {
    return this.http.get<PiattoUtenteB[]>(Constants.ROOT_URL + "/preferiti/" + localStorage.getItem("idUtente"));
  }

  public ottieniPreferiti(): Observable<PiattoUtente[]> {
    return this.http.get<PiattoUtente[]>(Constants.ROOT_URL + "/preferiti/" + localStorage.getItem("idUtente"));
  }

  public aggiungiAiPreferiti(piatto: Piatto, route : number) {
    console.log("post preferito")
    this.http.post(Constants.ROOT_URL + "/preferiti/" + localStorage.getItem("idUtente"), piatto.id).subscribe(res => {
      this.preferitiInit();
      if(route === 0) {
        this.router.navigateByUrl('/', {skipLocationChange: true})
          .then(() => {
            this.router.navigate(["/menu"]);
          });
      }
      else {
        this.router.navigateByUrl('/', {skipLocationChange: true})
          .then(() => {
            this.router.navigate(["/preferiti"]);
          });
      }
    })
    console.log("dopo post preferito")
  }

  public rimuoviDaiPreferiti(piatto: Piatto, route: number) {
    this.http.post(Constants.ROOT_URL + "/preferiti/" + localStorage.getItem("idUtente") + "/" + piatto.id, "").subscribe(res => {
      this.preferitiInit();

      if(route === 0) {
        this.router.navigateByUrl('/', {skipLocationChange: true})
          .then(() => {
            this.router.navigate(["/menu"]);
          });
      }
      else {
        this.router.navigateByUrl('/', {skipLocationChange: true})
          .then(() => {
            this.router.navigate(["/preferiti"]);
          });
      }

    })

  }

  getPreferito(idPiatto: number): Observable<PiattoUtente> {
    return this.http.get<PiattoUtente>(Constants.ROOT_URL + "/preferiti/" + localStorage.getItem('idUtente') + "/" + idPiatto);
  }

  getAllPreferiti() : Observable<Piatto[]> {
    return this.http.get<Piatto[]>(Constants.ROOT_URL + "/preferiti/" + localStorage.getItem("idUtente") + "/all")
}

}

import {Injectable} from '@angular/core';
import {MenuHttpService} from "../http/menu-http.service";
import {ImmaginiHttpService} from "../http/immagini-http.service";

@Injectable({
  providedIn: 'root'
})
export class ImmaginiService {

  mapImmagini!: Map<number, string>;
  idPiatti : number[] = [];


  constructor(public menuService: MenuHttpService,
              public immaginiHttpServ: ImmaginiHttpService) {
    this.mapImmagini = new Map<number, string>();
    this.menuService.ottieniMenu().subscribe(res => {
      res.forEach(element => {
        element.piatti.forEach(piatto => {
          this.immaginiHttpServ.ottieniImmagine(piatto.id).subscribe(res => {
            this.mapImmagini.set(piatto.id, res.img);
            console.log("immagine b64 in immaginiService: " + res.img);
          })
        })
      })
    })
  }





}

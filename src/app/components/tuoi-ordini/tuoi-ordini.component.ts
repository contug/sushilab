import {Component, OnInit} from '@angular/core';
import {OrdiniService} from "../../core/http/ordini.service";
import {MenuService} from "../../core/services/menu.service";
import {Ordine} from "../../shared/models/ordine";
import {OrdineDettaglio} from "../../shared/models/ordine-dettaglio";
import {ImmaginiService} from "../../core/services/immagini.service";
import {DomSanitizer} from "@angular/platform-browser";
import {OrdineConfermato} from "../../shared/models/ordine-confermato";
import {List} from "@zxing/library/es2015/customTypings";

@Component({
  selector: 'app-tuoi-ordini',
  templateUrl: './tuoi-ordini.component.html',
  styleUrls: ['./tuoi-ordini.component.css']
})
export class TuoiOrdiniComponent implements OnInit {

  idSessione: string = "0"
  userId: string = "personali"

  //ordiniTavolo!: OrdineDettaglio[];
  ordiniUtente!: OrdineDettaglio[];
  hidden: boolean = true;
  ordini!: Ordine[];
  note: string = ''


  constructor(private ordiniService: OrdiniService,
              public menuService: MenuService,
              public sanitizer: DomSanitizer,
              public immaginiService: ImmaginiService) {

  }

  ngOnInit(): void {

    this.menuService.mostraMappa();


    this.menuService.listaOrdiniDettaglio().subscribe(res => {
      this.ordiniUtente = res;
      //console.log(this.ordiniUtente)
    })
  }

  confermaOrdine() {

    let idUtente = localStorage.getItem('idUtente')!;
    let listaOrdini : OrdineConfermato[] = [];

    this.ordiniUtente.forEach((value, index, array) => {
      let ordine : OrdineConfermato = new OrdineConfermato();
      ordine.piattoId = value.piatto.id;
      ordine.count = value.molteplicita;
      ordine.note = value.note;
      listaOrdini.push(ordine);
    })

    this.ordiniService.confermaOrdine("5", idUtente, listaOrdini).subscribe();

    console.log(this.ordiniUtente)
    this.ordiniUtente = [];
    this.menuService.pulisciMappe()


    /*this.menuService.listaOrdiniDettaglio().subscribe(res => {
      this.ordiniUtente = res;
      console.log(this.ordiniUtente)


    })*/
  }

  getImmagine(id: number):string {
    return this.immaginiService.mapImmagini.get(id)!;
  }

  togglePanel() {
    this.hidden = !this.hidden;
  }

  clicc(i: number) {

    //let note=(<HTMLInputElement>document.getElementById("id "+"idpiatto")).value
    //this.ordiniUtente[i].note=note;

    console.log(this.ordiniUtente[i]);

  }


  /*ottieniOrdini(): void {
    this.ordiniService.ottieniOrdiniUtente(this.idSessione, this.userId).subscribe(res => {
      console.log(res);
    })
  }*/




}

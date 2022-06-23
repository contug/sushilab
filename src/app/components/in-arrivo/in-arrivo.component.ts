import { Component, OnInit } from '@angular/core';
import {OrdiniService} from "../../core/http/ordini.service";
import {OrdineDettaglio} from "../../shared/models/ordine-dettaglio";
import {ImmaginiService} from "../../core/services/immagini.service";
import {DomSanitizer} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {Piatto} from "../../shared/models/piatto";

@Component({
  selector: 'app-in-arrivo',
  templateUrl: './in-arrivo.component.html',
  styleUrls: ['./in-arrivo.component.css']
})
export class InArrivoComponent implements OnInit {

  piattiInArrivo!:OrdineDettaglio[];
  hidden: boolean = true;

  constructor(private ordiniService:OrdiniService,
              public immaginiService:ImmaginiService,
              public sanitizer:DomSanitizer,
              private router:Router) { }

  ngOnInit(): void {
    this.ottieniOrdiniInArrivo();
  }

  togglePanel (){
    this.hidden = !this.hidden;
  }

  ottieniOrdiniInArrivo():void{
    this.ordiniService.ottieniOrdiniInArrivo().subscribe(res=>{
      this.piattiInArrivo=res;
      console.log(this.piattiInArrivo);
      console.log(this.piattiInArrivo[0].piatto.numero);
    })
  }

  getImmagine(id: number):string {
    return this.immaginiService.mapImmagini.get(id)!;
  }

  eliminaPiattoArrivato(ordine:OrdineDettaglio){
    ordine.molteplicita--
    if(ordine.molteplicita==0){
      console.log(ordine)
      this.ordiniService.eliminaOrdineArrivato(ordine).subscribe(res => {})
      console.log("FAI DELETE ORDINE")

      document.getElementById(ordine.piatto.id.toString())!.hidden = true;

     /* this.router.navigateByUrl('/', { skipLocationChange: true })
        .then(() => {
          this.router.navigate(["/in-arrivo"]);
        });*/

    }
    else {
      console.log(ordine)
      this.ordiniService.aggiornaOrdineArrivato(ordine).subscribe(res => {})
      console.log("FAI PUT ORDINE (molteplicità -1)")


    }

  }


  compare(a: OrdineDettaglio, b: OrdineDettaglio) {
    if (a.piatto.numero < b.piatto.numero) {
      return -1;
    }
    if (a.piatto.numero > b.piatto.numero) {
      return 1;
    }
    return 0;
  }

  checkMolteplicita(molteplicita : number) : boolean {
    if(molteplicita === 0)
      return true;
    else
      return false;
  }


}

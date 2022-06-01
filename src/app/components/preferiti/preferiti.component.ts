import { Component, OnInit } from '@angular/core';
import {PreferitiHttpService} from "../../core/http/preferiti-http.service";
import {PiattoUtente} from "../../shared/models/piatto-utente";
import {MenuHttpService} from "../../core/http/menu-http.service";
import {Piatto} from "../../shared/models/piatto";
import {ImmaginiService} from "../../core/services/immagini.service";

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.css']
})
export class PreferitiComponent implements OnInit {

  hidden: boolean = true;
  preferiti!:PiattoUtente[];
  piattiPreferiti:Piatto[]=[];

  constructor(private preferitiService:PreferitiHttpService,
              private menuService:MenuHttpService,
              private immaginiService:ImmaginiService) {

  }

  ngOnInit(): void {
    //this.ottieniMenu();

    //riceve array di piattiUtente
    this.ottieniPreferiti();

  }


  ottieniPreferiti(){
    this.preferitiService.ottieniPreferiti("0").subscribe(res=>{
      this.preferiti=res; //array di PiattoUtente

      this.preferiti.forEach((value,index,array)=>{
        this.menuService.ottieniPiatto(this.preferiti[index].idPiatto).subscribe(res=> {
          this.piattiPreferiti.push(res);
          console.log(this.piattiPreferiti);
        })
      })

      console.log("preferiti");
      console.log(this.preferiti);
      //return this.preferiti
    })

  }

  togglePanel (){
    this.hidden = !this.hidden;
  }


  getImmagine(id: number):string {
    return this.immaginiService.mapImmagini.get(id)!;
  }



}

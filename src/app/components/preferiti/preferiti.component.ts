import { Component, OnInit } from '@angular/core';
import {OrdiniService} from "../../core/http/ordini.service";
import {PreferitiHttpService} from "../../core/http/preferiti-http.service";
import {PiattoUtente} from "../../shared/models/piatto-utente";
import {Menu} from "../../shared/models/menu";
import {MenuService} from "../../core/services/menu.service";
import {MenuHttpService} from "../../core/http/menu-http.service";
import {Piatto} from "../../shared/models/piatto";
import {Observable} from "rxjs";

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.css']
})
export class PreferitiComponent implements OnInit {

  hidden: boolean = true;
  //menu!:Menu[];
  preferiti!:PiattoUtente[];
  piattiPreferiti:Piatto[]=[];

  constructor(private preferitiService:PreferitiHttpService,
              private menuService:MenuHttpService) {

  }

  ngOnInit(): void {
    //this.ottieniMenu();

    //riceve array di piattiUtente
    this.ottieniPreferiti();

  }


  ottieniPreferiti(){
    this.preferitiService.ottieniPreferiti("0").subscribe(res=>{
      this.preferiti=res; //array di PiattoUtente

      this.preferiti.forEach(()=>{
        this.menuService.ottieniPiatto(this.preferiti[0].idPiatto).subscribe(res=> {
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


  /*ottieniMenu(): void {
    this.menuService.ottieniMenu().subscribe(res => {
      this.menu = res;
      console.log(this.menu);
    })
  }*/



}

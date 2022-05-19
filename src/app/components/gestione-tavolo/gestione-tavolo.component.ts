import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {CreaSessioneHttpService} from "../../core/http/crea-sessione-http.service";
import {Tavolo} from "../../shared/models/tavolo";

@Component({
  selector: 'app-gestione-tavolo',
  host: {class: 'router-element'},
  templateUrl: './gestione-tavolo.component.html',
  styleUrls: ['./gestione-tavolo.component.css']
})
export class GestioneTavoloComponent implements OnInit {

  tavolo!:Tavolo;
  constructor(public http:HttpClient,public route: ActivatedRoute, public creaSessioneService: CreaSessioneHttpService) { }

  ngOnInit(): void {
  }


  creaSessione():void{
    this.creaSessioneService.creaSessione();
  }

  ottieniSessione():Tavolo{
    this.creaSessioneService.ottieniSessione().subscribe( res=>{
        this.tavolo=res;
        console.log(res);
    });
    return this.tavolo;
  }

}

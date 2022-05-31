import {Component, OnInit} from '@angular/core';
import {Menu} from "../../shared/models/menu";
import {MenuHttpService} from "../../core/http/menu-http.service";
import {MenuService} from "../../core/services/menu.service";
import {DomSanitizer} from "@angular/platform-browser";
import {Piatto} from "../../shared/models/piatto";
import {ImmaginiService} from "../../core/services/immagini.service";



@Component({
  selector: 'app-menu',
  host: {class: 'router-element'},
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  hidden: boolean = true;
  menu!: Menu[];
  immagine:any;


  constructor(private menuHttpService : MenuHttpService,
              public menuService: MenuService,
              private sanitizer:DomSanitizer,
              private immaginiService:ImmaginiService) { }

  ngOnInit(): void {
    console.log("oninit");
    this.ottieniMenu();
    this.menuService.mapInit();
    this.menuService.mostraMappa();

    if(this.immaginiService.mapImmagini.size===0)
      this.immaginiService.getImmagini()
  }


  getImmagine(id:number){
    this.immaginiService.creaUrl(this.immaginiService.getImmagine(id))
  }





  togglePanel (){
    this.hidden = !this.hidden;
  }

  ottieniMenu(): void {
    this.menuHttpService.ottieniMenu().subscribe(res => {
      console.log(res);
      this.menu = res;
      console.log(this.menu);
      console.log(this.menu[0].nome);

    })
  }


  ottieniImmagine(){
    this.menuHttpService.ottieniPiatto(0)
      .subscribe( res =>{      //res avrà un piatto
        let piatto:Piatto = res     //piatto.immagine sarà tipo blob
        let objectUrl=URL.createObjectURL(piatto.immagine) //creo url passando il blob
        this.immagine=this.sanitizer.bypassSecurityTrustUrl(objectUrl)
      })
  }


}

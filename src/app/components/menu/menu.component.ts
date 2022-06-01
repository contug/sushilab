import {Component, OnInit} from '@angular/core';
import {Menu} from "../../shared/models/menu";
import {MenuHttpService} from "../../core/http/menu-http.service";
import {MenuService} from "../../core/services/menu.service";
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
  immagine: any;


  constructor(private menuHttpService: MenuHttpService,
              public menuService: MenuService,
              public immaginiService: ImmaginiService,) {
  }

  ngOnInit(): void {
    console.log("oninit");
    this.ottieniMenu();
    this.menuService.mapInit();
    this.menuService.mostraMappa();


  }


  getImmagine(id: number):string {
    return this.immaginiService.mapImmagini.get(id)!;
  }



  togglePanel() {
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


}

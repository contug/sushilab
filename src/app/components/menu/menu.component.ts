import {Component, OnInit} from '@angular/core';
import {Menu} from "../../shared/models/menu";
import {MenuHttpService} from "../../core/http/menu-http.service";
import {MenuService} from "../../core/services/menu.service";
import {Piatto} from "../../shared/models/piatto";



@Component({
  selector: 'app-menu',
  host: {class: 'router-element'},
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  hidden: boolean = true;
  menu!: Menu[];



  constructor(private menuHttpService : MenuHttpService,
              private menuService: MenuService) { }

  ngOnInit(): void {
    console.log("oninit")
    this.ottieniMenu();
  }

  getValue(piatto:Piatto) : number {
    return this.menuService.getValue(piatto);
  }

  modificaOrdine(piatto: Piatto, button: boolean) : void {
    this.menuService.modificaOrdine(piatto, button);
  }

  modificaQuantita(piatto: Piatto, button: boolean) {
    this.menuService.modificaOrdine(piatto, button);
  }

  togglePanel (){
    this.hidden = !this.hidden;
  }

  ottieniMenu(): void {
    this.menuHttpService.ottieniMenu().subscribe(res => {
      console.log(res);
      this.menu = res;
      console.log(this.menu[0].nome);

    })
  }
}

import { Component, OnInit } from '@angular/core';
import {Menu} from "../../shared/models/menu";
import {MenuHttpService} from "../../core/http/menu-http.service";



@Component({
  selector: 'app-menu',
  host: {class: 'router-element'},
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  hidden: boolean = true;
  menu!: Menu[];



  constructor(private menuService : MenuHttpService) { }

  ngOnInit(): void {
    this.ottieniMenu();
  }


  togglePanel (){
    this.hidden = !this.hidden;
  }

  ottieniMenu(): void {
    this.menuService.ottieniMenu().subscribe(res => {
      console.log(res);
      this.menu = res;
      console.log(this.menu[0].nome);

    })
  }
}

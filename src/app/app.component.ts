import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {MenuService} from "./core/services/menu.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'sushilab';

  @ViewChild("drawer") drawer!: MatDrawer;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.drawer.position = "end";
  }

}

import { Component, OnInit } from '@angular/core';
import {DrawerService} from "../../core/services/drawer.service";

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {

  constructor(public drawerService : DrawerService) { }

  ngOnInit(): void {
  }

}

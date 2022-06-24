import { Injectable } from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";

@Injectable({
  providedIn: 'root'
})
export class DrawerService {

  drawer! : MatDrawer;

  constructor() { }

  setDrawer(drawer : MatDrawer) {
    this.drawer = drawer;
  }
}

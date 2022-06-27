import {Injectable} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DrawerService {

  drawer!: MatDrawer;

  constructor(public auth: AuthService,
              public router : Router) {
  }

  setDrawer(drawer: MatDrawer) {
    this.drawer = drawer;
  }


  areaPersonaleRouting() {
    console.log(localStorage.getItem('expiresAt'));
    if (this.auth.isLoggedIn()) {
      this.router.navigateByUrl("/area-personale");
      this.drawer.close();
    }
    else {
      this.router.navigateByUrl("/login");
      this.drawer.close();
    }
  }
}

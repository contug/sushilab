import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../core/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-area-personale',
  host: {class: 'router-element'},
  templateUrl: './area-personale.component.html',
  styleUrls: ['./area-personale.component.css']
})
export class AreaPersonaleComponent implements OnInit {

  constructor(private auth : AuthService,
              private router : Router) {}

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl("/login")
  }

}

import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../core/auth/auth.service";

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {

  loggato!:boolean

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.loggato=this.auth.logged()
  }

}

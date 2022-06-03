import { Component, OnInit } from '@angular/core';
import {SessioneHttpService} from "../../core/http/sessione-http.service";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-crea-sessione',
  host: {class: 'router-element'},
  templateUrl: './crea-sessione.component.html',
  styleUrls: ['./crea-sessione.component.css']
})
export class CreaSessioneComponent implements OnInit {

  constructor() {

  }

  width = 0;
  qrData = "#temp-code";

  ngOnInit(): void {
    this.qrWidth()
  }


  qrWidth() {
    let width = document.getElementById("qr-code")!.offsetWidth;
    this.width = width;
  }
}

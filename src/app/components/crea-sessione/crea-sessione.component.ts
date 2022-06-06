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
  numeroTavolo:number = 5;
  idSessione!:string;

  ngOnInit(): void {
    this.qrWidth()
    this.idSessione=this.generaIdSessione(this.numeroTavolo)
  }


  qrWidth() {
    let width = document.getElementById("qr-code")!.offsetWidth;
    this.width = width;
  }

  generaIdQr(length: number) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }

  generaIdSessione(numeroTavolo: number): string {
    let idQr = this.generaIdQr(5)
    let idTavolo = numeroTavolo + "-" + idQr
    console.log(idTavolo)
    return idTavolo
  }
}

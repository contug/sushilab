import { Component, OnInit } from '@angular/core';
import {Allergene} from "../../shared/models/allergene";
import {GuidaHttpService} from "../../core/http/guida-http.service";

@Component({
  selector: 'app-guida',
  templateUrl: './guida.component.html',
  styleUrls: ['./guida.component.css']
})
export class GuidaComponent implements OnInit {

  allergeni!: Allergene[];

  constructor(private guidaHttpService : GuidaHttpService) { }

  ngOnInit(): void {
    this.getAllergeni();
  }

  getAllergeni() : void {
    this.guidaHttpService.getAllergeni().subscribe(res => {
      this.allergeni = res;
    })
  }

}

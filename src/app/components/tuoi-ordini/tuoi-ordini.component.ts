import {Component, OnInit} from '@angular/core';
import {OrdiniService} from "../../core/http/ordini.service";

@Component({
  selector: 'app-tuoi-ordini',
  templateUrl: './tuoi-ordini.component.html',
  styleUrls: ['./tuoi-ordini.component.css']
})
export class TuoiOrdiniComponent implements OnInit {

  idSessione: string = "0"
  userId: string = "personali"

  constructor(private ordiniService: OrdiniService) {

  }

  ngOnInit(): void {
    this.ottieniOrdini()
  }

  ottieniOrdini(): void {
    this.ordiniService.ottieniOrdiniUtente(this.idSessione, this.userId).subscribe(res => {
      console.log(res);
    })
  }

}

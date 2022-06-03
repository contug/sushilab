import {Component, Inject, Injectable, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RecensioniHttpService} from "../../core/http/recensioni-http.service";
import {lastValueFrom} from "rxjs";

export interface DialogData {
  idPiatto: number;
  valutazione: number;
}

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit, OnDestroy {

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              public recensioniHttpService: RecensioniHttpService) {
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
  }

  yellow = "#ffbf5f"

  starClick(id: string) {
    if (id === "1") {
      document.getElementById("1")!.style.color = this.yellow;
      document.getElementById("2")!.style.color = "lightgrey";
      document.getElementById("3")!.style.color = "lightgrey";
      document.getElementById("4")!.style.color = "lightgrey";
      document.getElementById("5")!.style.color = "lightgrey";
      this.data.valutazione = 1;
    }
    if (id === "2") {
      document.getElementById("1")!.style.color = this.yellow;
      document.getElementById("2")!.style.color = this.yellow;
      document.getElementById("3")!.style.color = "lightgrey";
      document.getElementById("4")!.style.color = "lightgrey";
      document.getElementById("5")!.style.color = "lightgrey";
      this.data.valutazione = 2;

    }
    if (id === "3") {
      document.getElementById("1")!.style.color = this.yellow;
      document.getElementById("2")!.style.color = this.yellow;
      document.getElementById("3")!.style.color = this.yellow;
      document.getElementById("4")!.style.color = "lightgrey";
      document.getElementById("5")!.style.color = "lightgrey";
      this.data.valutazione = 3;

    }
    if (id === "4") {
      document.getElementById("1")!.style.color = this.yellow;
      document.getElementById("2")!.style.color = this.yellow;
      document.getElementById("3")!.style.color = this.yellow;
      document.getElementById("4")!.style.color = this.yellow;
      document.getElementById("5")!.style.color = "lightgrey";
      this.data.valutazione = 4;
    }
    if (id === "5") {
      document.getElementById("1")!.style.color = this.yellow;
      document.getElementById("2")!.style.color = this.yellow;
      document.getElementById("3")!.style.color = this.yellow;
      document.getElementById("4")!.style.color = this.yellow;
      document.getElementById("5")!.style.color = this.yellow;
      this.data.valutazione = 5;
    }

  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  postRecensione() {
   this.recensioniHttpService.postRecensione(this.data.idPiatto, this.data.valutazione)
    console.log("post recensione")
  }


}

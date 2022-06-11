import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {QrDialogComponent} from "../qr-dialog/qr-dialog.component";
import {QrService} from "../../core/services/qr.service";
import {SessioneHttpService} from "../../core/http/sessione-http.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-unisciti',
  host: {class: 'router-element'},
  templateUrl: './unisciti.component.html',
  styleUrls: ['./unisciti.component.css']
})
export class UniscitiComponent implements OnInit {

  constructor(public dialog: MatDialog,
              public qrService: QrService,
              public sessioneHttpService: SessioneHttpService,
              private router: Router) { }

  ngOnInit(): void {
  }

  openDialog() : void {
    const dialogRef = this.dialog.open(QrDialogComponent, {
      width: '75vw',
      data: {scannedCode: this.qrService.qrCode},
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log("qrdialog chiuso")
      this.sessioneHttpService.ottieniSessione(this.qrService.qrCode).subscribe(res => {
        if(res == null || res == undefined) {
          alert("Questo QR non è valido!")
          this.qrService.clean();
        }
        else
          this.router.navigateByUrl("/menu");
      })
    })
  }


}

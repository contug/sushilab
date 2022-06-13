import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {QrDialogComponent} from "../qr-dialog/qr-dialog.component";
import {QrService} from "../../core/services/qr.service";
import {SessioneHttpService} from "../../core/http/sessione-http.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {resolve} from "@angular/compiler-cli";

@Component({
  selector: 'app-unisciti',
  host: {class: 'router-element'},
  templateUrl: './unisciti.component.html',
  styleUrls: ['./unisciti.component.css']
})
export class UniscitiComponent implements OnInit {

  qrForm!: FormGroup;

  constructor(public dialog: MatDialog,
              public qrService: QrService,
              public sessioneHttpService: SessioneHttpService,
              private router: Router,
              private fb: FormBuilder) {
    this.qrForm = this.fb.group({'qrInput': ['', Validators.required]})
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(QrDialogComponent, {
      width: '75vw',
      data: {scannedCode: this.qrService.qrCode},
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log("qrdialog chiuso")
      if (this.qrService.qrCode != '') {
        console.log('qr dopo chiusura dialog: ' + this.qrService.qrCode)
        this.sessioneHttpService.checkSessione(this.qrService.qrCode).subscribe(res => {
          console.log("log checkSessione")
          console.log(res.status)
          if (res.status != 200) {
            console.log("qr non valido")
            alert("Questo QR non è valido!")
            this.qrService.clean();
          } else
            this.router.navigateByUrl("/menu");
        })
      }


    })
  }

  onClickUnisciti() {
    let validator = this.qrForm.value
    console.log("qr manuale: " + validator.qrInput)
    if (validator.qrInput) {
      this.sessioneHttpService.checkSessione(validator.qrInput).subscribe(res => {
        console.log(res.status)
        console.log(res.body)
        if (res.status != 200) {
          alert("Questo QR non è valido!")
        }
        else {
          this.qrService.qrCode = validator.qrInput;
          console.log('qr manuale nel servizio: ' + this.qrService.qrCode)
          this.router.navigateByUrl("/menu");
        }
      })

    }
  }


}

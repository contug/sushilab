import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {QrService} from "../../core/services/qr.service";
import {ZXingScannerComponent} from "@zxing/ngx-scanner";

export interface QrDialogData {
  scannedCode : string;
}

@Component({
  selector: 'app-qr-dialog',
  templateUrl: './qr-dialog.component.html',
  styleUrls: ['./qr-dialog.component.css']
})
export class QrDialogComponent implements OnInit {

  @ViewChild('scanner', {static: false})
  scanner!: ZXingScannerComponent;

  constructor(public dialogRef : MatDialogRef<QrDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: QrDialogData,
              public qrService : QrService) { }

  ngOnInit(): void {
  }

  getQR(qr: string) {
    console.log("qr scan: " + qr)
    this.qrService.qrCode = qr;
    console.log("qr in qrService dopo scan: " + this.qrService.qrCode);
    this.dialogRef.close();
  }

  annulla() {
    this.qrService.clean();
    this.dialogRef.close();
  }

}

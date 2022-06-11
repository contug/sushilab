import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QrService {

  public qrCode = '';

  constructor() { }

  clean() {
    this.qrCode = '';
  }
}

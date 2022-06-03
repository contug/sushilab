import {Component, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Menu} from "../../shared/models/menu";
import {MenuHttpService} from "../../core/http/menu-http.service";
import {MenuService} from "../../core/services/menu.service";
import {ImmaginiService} from "../../core/services/immagini.service";
import {DomSanitizer} from "@angular/platform-browser";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";
import {AuthService} from "../../core/auth/auth.service";
import {RecensioniHttpService} from "../../core/http/recensioni-http.service";

@Component({
  selector: 'app-menu',
  host: {class: 'router-element'},
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnChanges {

  hidden: boolean = true;
  menu!: Menu[];
  immagine: any;



  constructor(private menuHttpService: MenuHttpService,
              public menuService: MenuService,
              public immaginiService: ImmaginiService,
              public sanitizer: DomSanitizer,
              public authService : AuthService,
              public dialog : MatDialog,
              public recensioniHttpService : RecensioniHttpService) {
  }

  ngOnInit(): void {
    console.log("oninit");
    this.ottieniMenu();
    this.menuService.mapInit();
    this.menuService.mostraMappa();


  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }


  getImmagine(id: number):string {
    return this.immaginiService.mapImmagini.get(id)!;
  }



  togglePanel() {
    this.hidden = !this.hidden;
  }

  ottieniMenu(): void {
    this.menuHttpService.ottieniMenu().subscribe(res => {
      console.log(res);
      this.menu = res;
      console.log(this.menu);
      console.log(this.menu[0].nome);

    })
  }


  intValue(num:number): number {
    return Math.trunc(num);
  }

  diffValue(num:number): number {
    return 5-Math.trunc(num);
  }




  openDialog(idPiatto:number): void {
    let valutazione = 0;
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '75vw',
      data: {idPiatto: idPiatto, val: valutazione},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
       let val = result;
       console.log(valutazione);
       this.recensioniHttpService.postRecensione(idPiatto, valutazione);
    });


  }



}

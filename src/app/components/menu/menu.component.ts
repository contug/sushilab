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
import {Piatto} from "../../shared/models/piatto";
import {Router} from "@angular/router";

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
              public dialog : MatDialog,
              private router : Router) {
  }

  ngOnInit(): void {
    console.log("oninit");
    this.ottieniMenu();
    this.menuService.getValutazioni();
    console.log("array valutazioni: " + this.menuService.valutazioniUtente);
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





  openDialog(idPiatto:number, piatto: Piatto): void {
    let valutazione = 0;
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '75vw',
      data: {idPiatto: idPiatto, val: valutazione},
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      this.router.navigateByUrl('/', { skipLocationChange: true })
        .then(() => {
          this.router.navigate(["/menu"]);
        });
    });


  }

  compare( a:Piatto, b:Piatto ) {
    if ( a.numero < b.numero ){
      return -1;
    }
    if ( a.numero > b.numero ){
      return 1;
    }
    return 0;
  }

}

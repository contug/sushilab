import { Component, OnInit } from '@angular/core';
import {BlacklistHttpService} from "../../core/http/blacklist-http.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Ingrediente} from "../../shared/models/ingrediente";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {BlacklistDialogComponent} from "../blacklist-dialog/blacklist-dialog.component";

@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklist.component.html',
  styleUrls: ['./blacklist.component.css']
})
export class BlacklistComponent implements OnInit {

  constructor(public blacklistService:BlacklistHttpService,
              private router:Router,
              public dialog:MatDialog) { }

  ingredientiBlacklistati:Ingrediente[]=[];
  ingredienti:Ingrediente[]=[]
  idUtente:number=0;
  ingrediente!:string;

  ngOnInit(): void {
    this.ottieniIngredienti()
    this.ottieniBlacklist()
  }

  ottieniBlacklist(){
    this.blacklistService.ottieniBlacklist().subscribe( res => {
          this.ingredientiBlacklistati=res;
          console.log(this.ingredientiBlacklistati)
      }
    )
  }

  /*aggiungiIngredienteBlacklist(ingrediente:string){
    this.blacklistService.aggiungiIngredientiBlacklist(ingrediente).subscribe();
  }*/



  eliminaDallaBlacklist(ingrediente:string){
    this.blacklistService.eliminaDallaBlacklist(ingrediente)

    document.getElementById(ingrediente)!.hidden =true
    /*this.router.navigateByUrl('/', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(["/blacklist"]);
      });*/


  }

  ottieniIngredienti(){
    this.blacklistService.ottieniIngredienti().subscribe(res=>{
      this.ingredienti=res
    })
  }

  openDialog(ingredienti: Ingrediente[]){
    let dialogRef = this.dialog.open(BlacklistDialogComponent,{
      width: '80vw',
      data: {ingredienti: ingredienti}
    });
  }


}



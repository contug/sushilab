import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Ingrediente} from "../../shared/models/ingrediente";
import {BlacklistHttpService} from "../../core/http/blacklist-http.service";


export interface DialogData {
  ingredienti: Ingrediente[];
}

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-blacklist-dialog',
  templateUrl: './blacklist-dialog.component.html',
  styleUrls: ['./blacklist-dialog.component.css']
})
export class BlacklistDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BlacklistDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private blackListHttpService: BlacklistHttpService) { }

  ngOnInit(): void {
  }

  seleziona(ingrediente: Ingrediente){
    let myDivObj = document.getElementById(ingrediente.id.toString())!
    let myDivObjBgColor = window.getComputedStyle(myDivObj).backgroundColor;
    console.log(myDivObjBgColor)
    if(myDivObjBgColor == "rgb(255, 255, 255)")
      document.getElementById(ingrediente.id.toString())!.style.backgroundColor = "rgb(255, 191, 94)"
    else
      document.getElementById(ingrediente.id.toString())!.style.backgroundColor = "rgb(255, 255, 255)"
  }


  onClickClose() {
    let ingredienti: Ingrediente[]=[]

    for(let i=0; i<this.data.ingredienti.length;i++){
      let myDivObj = document.getElementById(this.data.ingredienti[i].id.toString())!
      let myDivObjBgColor = window.getComputedStyle(myDivObj).backgroundColor;

      if(myDivObjBgColor == "rgb(255, 191, 94)")
        ingredienti.push(this.data.ingredienti[i])

    }
    console.log(ingredienti)

    this.blackListHttpService.aggiungiIngredientiBlacklist(ingredienti).subscribe(res=>{
      console.log("dialog close click:" +res)
      this.dialogRef.close()
    })
  }

  annulla(){
    this.dialogRef.close()
  }
}

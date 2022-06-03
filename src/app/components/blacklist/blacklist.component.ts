import { Component, OnInit } from '@angular/core';
import {BlacklistHttpService} from "../../core/http/blacklist-http.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Ingrediente} from "../../shared/models/ingrediente";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklist.component.html',
  styleUrls: ['./blacklist.component.css']
})
export class BlacklistComponent implements OnInit {

  constructor(public blacklistService:BlacklistHttpService,
              private router:Router) { }

  ingredientiBlacklistati:Ingrediente[]=[];
  idUtente:number=0;
  ingrediente!:string;

  ngOnInit(): void {
    this.ottieniBlacklist()
  }

  ottieniBlacklist(){
    this.blacklistService.ottieniBlacklist().subscribe( res => {
          this.ingredientiBlacklistati=res;
          console.log(this.ingredientiBlacklistati)
      }
    )
  }

  aggiungiIngredienteBlacklist(ingrediente:string){
    this.blacklistService.aggiungiIngredienteBlacklist(ingrediente).subscribe();
  }



  eliminaDallaBlacklist(ingrediente:string){
    this.blacklistService.eliminaDallaBlacklist(ingrediente)

    this.router.navigateByUrl('/', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(["/blacklist"]);
      });


  }

}

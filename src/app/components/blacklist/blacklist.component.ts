import { Component, OnInit } from '@angular/core';
import {BlacklistHttpService} from "../../core/http/blacklist-http.service";

@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklist.component.html',
  styleUrls: ['./blacklist.component.css']
})
export class BlacklistComponent implements OnInit {

  constructor(public blacklistService:BlacklistHttpService) { }

  ingredientiBlacklistati:string[]=[];
  idUtente:number=0;

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

}

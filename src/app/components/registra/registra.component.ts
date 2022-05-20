import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UtenteHttpService} from "../../core/http/utente-http.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Utente} from "../../shared/models/utente";
import {BlacklistHttpService} from "../../core/http/blacklist-http.service";

@Component({
  selector: 'app-registra',
  host: {class: 'router-element'},
  templateUrl: './registra.component.html',
  styleUrls: ['./registra.component.css']
})
export class RegistraComponent implements OnInit {

  public formUtente:FormGroup;
  public utente!:Utente;
  private ingredienti!:string[];
  constructor(private fb:FormBuilder,public http:HttpClient, public utenteService:UtenteHttpService, public blacklistService:BlacklistHttpService) {

    this.formUtente=this.fb.group({
      'email':[''],
      'password':[''],
      'repeatpassword':['']
    })
  }

  ngOnInit(): void {

    //getUtente OK
    this.utenteService.ottieniUtente().subscribe(res=>{
      this.utente=res;
      console.log(this.utente);
    })

    //get blacklist OK
    this.blacklistService.ottieniBlacklist().subscribe(res=>{
      console.log(res);
    })

    //aggiorna blacklist
    this.blacklistService.aggiornaBlacklist(this.ingredienti).subscribe();
  }

  registraUtente(){

    console.log(this.formUtente.get('email')?.value + " "+
      this.formUtente.get('password')?.value +" "+
      this.formUtente.get('repeatpassword')?.value);

    this.utente.email=this.formUtente.get('email')?.value;
    this.utente.password=this.formUtente.get('password')?.value;

    this.utenteService.registraUtente(this.utente).subscribe();
    //console.log(this.utente);
  }



}

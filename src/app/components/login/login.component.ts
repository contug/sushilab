import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {UtenteHttpService} from "../../core/http/utente-http.service";
import {Utente} from "../../shared/models/utente";
import {AuthService} from "../../core/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  host: {class: 'router-element'},
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin:FormGroup;
  public utente!:Utente;


  constructor(public http:HttpClient, private fb:FormBuilder, public utenteService:UtenteHttpService,
  private auth : AuthService, private router: Router) {

    this.formLogin=this.fb.group({
      'email':['', Validators.required],
      'password':['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.utente=new Utente();
  }

  loginUtente(){
    this.utente.email=this.formLogin.get('email')?.value;
    this.utente.password=this.formLogin.get('password')?.value;

    this.utenteService.loginUtente(this.utente).subscribe();
    console.log(this.utente);
  }

  login() {
    let validator = this.formLogin.value
    if(validator.email && validator.password) {
      this.auth.login(validator.email, validator.password).subscribe(
        () => {
          console.log("logged in");
          this.router.navigateByUrl("/");
        });
    }
  }




}

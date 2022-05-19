import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";
import { GestioneTavoloComponent } from './components/gestione-tavolo/gestione-tavolo.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { DrawerComponent } from './components/drawer/drawer.component';
import {MatDividerModule} from "@angular/material/divider";
import { MenuComponent } from './components/menu/menu.component';
import {MatCardModule} from "@angular/material/card";
import { UniscitiComponent } from './components/unisciti/unisciti.component';
import { CreaSessioneComponent } from './components/crea-sessione/crea-sessione.component';
import { LoginComponent } from './components/login/login.component';
import { RegistraComponent } from './components/registra/registra.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import {MatIconModule} from "@angular/material/icon";
import {MatExpansionModule} from "@angular/material/expansion";

const routes: Routes = [
  {path: "", redirectTo: "gestione-tavolo", pathMatch: "full"},
  {path: "gestione-tavolo", component: GestioneTavoloComponent},
  {path: "menu", component: MenuComponent},
  {path: "gestione-tavolo/unisciti", component: UniscitiComponent},
  {path: "gestione-tavolo/crea-sessione", component: CreaSessioneComponent},
  {path: "login", component: LoginComponent},
  {path: "login/registra", component: RegistraComponent},
  {path: "login/forgot-password", component:ForgotPasswordComponent},
  {path: "login/forgot-password/recover-password",component:RecoverPasswordComponent},
  {path: "login", component: LoginComponent},
  {path: "login/registra", component: RegistraComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    GestioneTavoloComponent,
    DrawerComponent,
    MenuComponent,
    UniscitiComponent,
    CreaSessioneComponent,
    LoginComponent,
    RegistraComponent,
    ForgotPasswordComponent,
    RecoverPasswordComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import{MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";
import { GestioneTavoloComponent } from './components/gestione-tavolo/gestione-tavolo.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { DrawerComponent } from './components/drawer/drawer.component';
import {MatDividerModule} from "@angular/material/divider";
import { MenuComponent } from './components/menu/menu.component';
import {MatCardModule} from "@angular/material/card";
import { ListaOrdiniComponent } from './components/lista-ordini/lista-ordini.component';
import { TuoiOrdiniComponent } from './components/tuoi-ordini/tuoi-ordini.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { UniscitiComponent } from './components/unisciti/unisciti.component';
import { CreaSessioneComponent } from './components/crea-sessione/crea-sessione.component';
import { LoginComponent } from './components/login/login.component';
import { RegistraComponent } from './components/registra/registra.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MenuService} from "./core/services/menu.service";
import { GuidaComponent } from './components/guida/guida.component';
import { InArrivoComponent } from './components/in-arrivo/in-arrivo.component';
import { PreferitiComponent } from './components/preferiti/preferiti.component';
import { BlacklistComponent } from './components/blacklist/blacklist.component';
import {AuthService} from "./core/auth/auth.service";
import {AuthInterceptor} from "./core/auth/auth.interceptor";
import { DialogComponent } from './components/dialog/dialog.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {QRCodeModule} from "angularx-qrcode";

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
  {path: "lista-ordini", component:ListaOrdiniComponent},
  {path: "login/forgot-password/recover-password",component:RecoverPasswordComponent},
  {path: "login", component: LoginComponent},
  {path: "login/registra", component: RegistraComponent},
  {path: "tuoi-ordini", component: TuoiOrdiniComponent},
  {path: "in-arrivo", component:InArrivoComponent},
  {path: "preferiti", component:PreferitiComponent},
  {path: "guida", component: GuidaComponent},
  {path: "blacklist", component: BlacklistComponent}
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
    ListaOrdiniComponent,
    TuoiOrdiniComponent,
    GuidaComponent,
    InArrivoComponent,
    PreferitiComponent,
    BlacklistComponent,
    DialogComponent,
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
    MatButtonModule,
    HttpClientModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    QRCodeModule
  ],
  providers: [
    MenuService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

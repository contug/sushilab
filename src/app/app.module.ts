import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";
import { GestioneTavoloComponent } from './gestione-tavolo/gestione-tavolo.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { DrawerComponent } from './drawer/drawer.component';
import {MatDividerModule} from "@angular/material/divider";
import { MenuComponent } from './menu/menu.component';
import {MatCardModule} from "@angular/material/card";
import { UniscitiComponent } from './unisciti/unisciti.component';

const routes: Routes = [
  {path: "", redirectTo: "gestione-tavolo", pathMatch: "full"},
  {path: "gestione-tavolo", component: GestioneTavoloComponent},
  {path: "menu", component: MenuComponent},
  {path: "gestione-tavolo/unisciti", component: UniscitiComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    GestioneTavoloComponent,
    DrawerComponent,
    MenuComponent,
    UniscitiComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
    MatSidenavModule,
    MatDividerModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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

const routes: Routes = [
  {path: "", redirectTo: "gestione-tavolo", pathMatch: "full"},
  {path: "gestione-tavolo", component: GestioneTavoloComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    GestioneTavoloComponent,
    DrawerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
    MatSidenavModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

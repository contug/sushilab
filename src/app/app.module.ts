import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";
import { GestioneTavoloComponent } from './gestione-tavolo/gestione-tavolo.component';
import {MatSidenavModule} from "@angular/material/sidenav";

const routes: Routes = [
  {path: "", redirectTo: "gestione-tavolo", pathMatch: "full"},
  {path: "gestione-tavolo", component: GestioneTavoloComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    GestioneTavoloComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

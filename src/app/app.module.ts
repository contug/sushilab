import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";
import { GestioneTavoloComponent } from './gestione-tavolo/gestione-tavolo.component';

const routes: Routes = [
  {path: "", redirectTo: "gestione-tavolo", pathMatch: "full"},
  {path: "gestione-tavolo", component: GestioneTavoloComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GestioneTavoloComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';



@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

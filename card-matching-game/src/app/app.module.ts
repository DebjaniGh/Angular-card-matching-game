import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Game1Component } from './components/game1/game1.component';
import { MatchingGameComponent } from './components/matching-game/matching-game.component';

@NgModule({
  declarations: [
    AppComponent,
    Game1Component,
    MatchingGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

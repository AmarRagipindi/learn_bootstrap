import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextstylesComponent } from './textstyles/textstyles.component';
import { DisplaystylesComponent } from './displaystyles/displaystyles.component';
import { ColorstylesComponent } from './colorstyles/colorstyles.component';
import { ParagraphsComponent } from './paragraphs/paragraphs.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    TextstylesComponent,
    DisplaystylesComponent,
    ColorstylesComponent,
    ParagraphsComponent,
    AlertsComponent,
    ButtonsComponent,
    CardsComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

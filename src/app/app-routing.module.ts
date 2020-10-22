import { TextstylesComponent } from './textstyles/textstyles.component';
import { ParagraphsComponent } from './paragraphs/paragraphs.component';
import { ColorstylesComponent } from './colorstyles/colorstyles.component';
import { CardsComponent } from './cards/cards.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { DisplaystylesComponent } from './displaystyles/displaystyles.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path :'displaystyles', component: DisplaystylesComponent},
  {path :'buttons', component: ButtonsComponent},
  {path :'alerts', component: AlertsComponent},
  {path:'cards', component: CardsComponent},
  {path:'colorstyles',component: ColorstylesComponent},
  {path:'paragraphs',component:ParagraphsComponent},
  {path:'textstyles',component: TextstylesComponent},
  {path:'',redirectTo:'alerts',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

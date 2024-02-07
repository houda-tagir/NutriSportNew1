import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { FormulaireComponent } from './sport/formulaire/formulaire.component';
import { ExercicesComponent } from './sport/exercices/exercices.component';
import { SportComponent } from './sport/sport.component';
import {NutritionComponent} from "./nutrition/nutrition.component";
import {AcceuilComponent} from "./acceuil/acceuil.component";
import {MenueComponent} from "./menue/menue.component";
import {SigninComponent} from "./signin/signin.component";

const routes: Routes = [
  {path:'about-us',component:AboutUsComponent},
  {path:'acceuil',component:AcceuilComponent},
  {path:'nutrition',component:NutritionComponent},
  {path:'sport',component:SportComponent},
  {path:'',redirectTo:"/menue",pathMatch:'full'},
  {path:'menue',component:MenueComponent},
  {path:'signin',component:SigninComponent}





];
export const routing=RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SportComponent } from './sport/sport.component';
import { FormulaireComponent } from './sport/formulaire/formulaire.component';
import { ExercicesComponent } from './sport/exercices/exercices.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule, Routes } from '@angular/router';
import { NewsletterComponent } from './sport/newsletter/newsletter.component';
import { CallComponent } from './sport/formulaire/call/call.component';
import { routing } from './app-routing.module';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { MenueComponent } from './menue/menue.component';
import { SigninComponent } from './signin/signin.component';
import { NutritionComponent } from './nutrition/nutrition.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SportComponent,
    ExercicesComponent,
    AboutUsComponent,
    NewsletterComponent,
    CallComponent,
    AcceuilComponent,
    MenueComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormulaireComponent,
    routing,
    NutritionComponent

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

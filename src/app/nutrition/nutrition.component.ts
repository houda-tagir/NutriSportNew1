import { Component } from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {JsonPipe, NgClass, NgForOf, NgFor, NgIf} from "@angular/common";
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {repas} from "../repas";
import {RECIPE} from '../recipe';
@Component({
  selector: 'app-nutrition',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    JsonPipe,
    NgFor,
    NgClass,
    NgIf
  ],
  templateUrl: './nutrition.component.html',
  styleUrl: './nutrition.component.css'
})
export class NutritionComponent  {
  REPAS: repas = {
    name: 'Windstorm',
    text : 'Windstormhhhdjr kyurt',
  };

  Recip= RECIPE;

  userData: {
    nom: string;
    age: number;
    sexe: string;
    poids: string;
    groupeSanguin: string;
    allergies: string;
    nombreRepas: number;
    eauQuotidienne: number;
  } = {
    nom: '',
    age: 0,
    sexe: '',
    poids: '',
    groupeSanguin: '',
    allergies: '',
    nombreRepas: 1,
    eauQuotidienne: 0
  };






  allergiies: string[] = [
    'Arachides',
    'Lait',
    'Oeufs',
    'Blé',
    'Soja',
    'Fruits à coque',
    'Poisson',
    'Crustacés',
    'Mollusques',
    'Sésame',
    'Sulfites',
    'Moutarde',
    'Céleri',
    'Lupin',
    'None'
  ];
  sang: string[] = [
    'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'
  ];
  poids: string[] = [
    'Moins de 50 kg',
    '50 - 60 kg',
    '60 - 70 kg',
    '70 - 80 kg',
    '80 - 90 kg',
    'Plus de 90 kg'
  ];
  genres: string[] = ['Masculin', 'Féminin'];
  objectifs: string[] = ['Perte de poids',
    'Prise de masse musculaire',
    'Maintien un poids healthy',
    'Gestion de conditions médicales',
    'Amélioration de la santé digestive',
    'Énergie et performance',
    'Alimentation équilibrée',
    'Réduction de la consommation de sucre et de sel',
    'Autre'
  ]








  submitted = false;
  model: any;


  onSubmit(form: NgForm){
    // Set submitted to true to indicate form submission
    this.submitted = true;
    // Now you can access user data from this.userData
    console.log('Submitted Data:', form.value);
    // Here, you can perform further actions such as sending the data to a server
  }



  protected readonly RECIPE = RECIPE;
  selectedrepas?: repas;
  onSelect(REPAS: repas) {
    this.selectedrepas = REPAS;
  }
}

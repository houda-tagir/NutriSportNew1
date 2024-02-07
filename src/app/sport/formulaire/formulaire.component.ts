import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl,FormGroup,ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  standalone:true,
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css',
  imports:[ReactiveFormsModule,CommonModule]
})
export class FormulaireComponent {
  ReservForm=new FormGroup ({
  Nom:new FormControl(null,Validators.required ),
  Prenom:new FormControl(null,Validators.required),
  Age:new FormControl(null,Validators.required),
  Hauteur:new FormControl(null,Validators.required),
  Poids:new FormControl(null,Validators.required),
  Tel:new FormControl(null,[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
  TypeCorps:new FormControl(null,Validators.required),
  ProgramAct:new FormControl(null,Validators.required),
  Objectif:new FormControl(null,Validators.required),
  Sexe:new  FormControl(null,Validators.required)
  })
  WillCallYou()
  {
    
  }


}

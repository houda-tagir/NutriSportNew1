import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { AuthentificationService } from '../services/authentification.service';
import { AppUser } from '../bd/user_bd';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  userFormGroup! : FormGroup;
  errorMessage!:string;
  constructor(private fb : FormBuilder, private auth: AuthentificationService,private router:Router){}
  ngOnInit(): void {
    this.userFormGroup=this.fb.group({
      username: this.fb.control(""),
      password: this.fb.control("")

    });
}
handleLogin(): void{
      
  let user= this.userFormGroup.value.username;
  let password=this.userFormGroup.value.password; 
  this.auth.login(user, password).subscribe({
    next:(appuser:AppUser)=>{
       this.auth.authenticateUser(appuser).subscribe
       ({next:(data:boolean)=>{
        this.router.navigateByUrl('/menue');
      }}
       )
    },
    error :(err: any)=>{
      this.errorMessage=err;

    }
  });
}

}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit{
  signupuser!:any[];
  signupobj:any={
    username:'',
    email:'',
    naiss:''
  }
  constructor(){
  };
  ngOnInit(): void {
    throw new Error('Error');
  }
  SignUp(){
    this.signupuser.push(this.signupobj);
    localStorage.setItem('signupuser',JSON.stringify(this.signupuser));
    this.signupobj={   
     username:'',
    password:'',
    email:'',
    naiss:''}
  }
}

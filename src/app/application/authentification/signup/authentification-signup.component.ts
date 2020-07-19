import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from "../../../services";

@Component({
  selector: 'app-authentification-signup',
  templateUrl: './authentification-signup.component.html',
  styleUrls: ['./authentification-signup.component.css']
})
export class AuthentificationSignupComponent implements OnInit {

  email: string
  password: string

  constructor(private authentificationService: AuthentificationService) { } 

  ngOnInit(): void { }

  signUpUser(){
    this.authentificationService.signUp(this.email, this.password)
    this.email = this.password = ''
  }

}
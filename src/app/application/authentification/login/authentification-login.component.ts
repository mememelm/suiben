import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from "../../../services";
import { ANIMATION_TYPES } from 'ng2-loading-spinner';
import { INg2LoadingSpinnerConfig } from 'ng2-loading-spinner';


@Component({
  selector: 'app-authentification-login',
  templateUrl: './authentification-login.component.html',
  styleUrls: ['./authentification-login.component.css']
})
export class AuthentificationLoginComponent implements OnInit {

  email: string
  password: string
  isAuthentifiedStatut: boolean
  spinnerShow: boolean
  
  constructor(private authentificationService : AuthentificationService) { }

  spinnerConfig: INg2LoadingSpinnerConfig = {
    animationType : ANIMATION_TYPES.cubeGrid,
    spinnerColor : '#019735',
    backdropColor : 'white'
  }

  ngOnInit(): void {
    this.isAuthentifiedStatut = this.authentificationService.isAuthentified
    this.authentificationService.currentUser()
  }

  loginUser(){
    this.authentificationService.signIn(this.email, this.password)
    this.email = this.password = ''
    this.spinnerShow = this.authentificationService.spinner
    this.isAuthentifiedStatut = this.authentificationService.isAuthentified
  }

}
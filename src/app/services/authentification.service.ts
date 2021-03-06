import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable, BehaviorSubject } from 'rxjs';
import * as firebase from "firebase/app";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { ToastrService } from "ngx-toastr";


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService implements CanActivate{

  userData: Observable<firebase.User>
  isAuthentified = false 
  spinner: boolean = true
 
  constructor(
    private angularFireAuth: AngularFireAuth, 
    private router: Router, 
    private toastrService: ToastrService) {
      this.userData = this.angularFireAuth.authState
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<boolean> | Promise<boolean> | boolean {
    if (this.isAuthentified){
      return true
    } else { 
      this.router.navigate(['/login']) 
    }      
  }  

  signUp(email: string, password: string){
    this.angularFireAuth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.toastrService.success('Enregistrement réussi')        
      })
      .catch(() => {
        this.toastrService.error('Format email incorrect ou vérifiez que le mot de passe doit au moins contenir 6 caractères')
      }); 
  }

  signIn(email: string, password: string): boolean{
    this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .then(() => { 
        setTimeout(() => {
          this.spinner = true
        }, 5000)        
        this.isAuthentified = true
        this.router.navigate(['/home'])       
        this.toastrService.success('Bonjour ' + email)       
      })
      .catch(() => {
        this.toastrService.error('Email ou mot de passe incorrect, vueillez actualiser l\'application')
      });      
    return false
  }

  signOut(){
    this.isAuthentified = false
    this.angularFireAuth.signOut()
      .then(() => {
        this.router.navigate(['/login'])        
      })   
  }

  returnLogin(){
    return this.spinner = false
  }

  listenner(){
    document.addEventListener('click', () => this.returnLogin())
    document.addEventListener('keypress', () => this.returnLogin())
  }

  currentUser(){
    this.angularFireAuth.authState.subscribe(
      user => { 
        let e = [user.email]
        console.log(e) }
    )
  }
}

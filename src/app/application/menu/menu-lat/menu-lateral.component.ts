import { Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import { AuthentificationService } from "../../../services";


@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})

export class MenuLateralComponent {  

  constructor(private authentificationService: AuthentificationService){ }

  mode = new FormControl('over')

  logOut(){
    this.authentificationService.signOut()
  }
}

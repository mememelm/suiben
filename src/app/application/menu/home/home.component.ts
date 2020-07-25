import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from "../../../services";
import { DatePipe } from "@angular/common";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  date: any = Date.now()

  constructor(private authentificaitonServiice: AuthentificationService, private datePipe: DatePipe) {    
    setInterval(() => {
      if (this.date = new Date())
        this.date = this.datePipe.transform(this.date, 'EEEE - dd MMMM yyyy - h:mm:ss')
    }, 1)
  }

  ngOnInit(): void {
    this.authentificaitonServiice.currentUser()
  }

  logOut(){
    this.authentificaitonServiice.signOut()
  }
}

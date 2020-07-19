import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {

  title = 'formations'

  constructor() { }

  displayedColumnsFormation = ['exploitant', 'formation', 'formationlength']

  ngOnInit(): void {
  }

}

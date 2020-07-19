import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-innovation-list',
  templateUrl: './innovation-list.component.html',
  styleUrls: ['./innovation-list.component.css']
})
export class InnovationListComponent implements OnInit {
  
  title = 'innovations'

  constructor() { }

  displayedColumnsInnovation = ['exploitants', 'localisation', 'innovation', 'innovationAdd']

  ngOnInit(): void {
  }

}

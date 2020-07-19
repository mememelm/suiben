import { Component, OnInit } from '@angular/core';
import { DomaineService } from '../../services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-domaine-cedar',
  templateUrl: './domaine-cedar.component.html',
  styleUrls: ['./domaine-cedar.component.css']
})
export class DomaineCedarComponent implements OnInit {

  domaineFormGroup: FormGroup
  domaines: any

  constructor(private domaineService: DomaineService, private formBuilder: FormBuilder, private toastrService: ToastrService) { }

  columnDisplayedDomaine = ['domaine']
  dataSourceDomaine = this.domaines

  ngOnInit(): void {
    this.loadDomaineList()
    this.domaineService.getDomaineList()
    this.domaineForm()
  }

  public get domaineName(){
    return this.domaineFormGroup.get('domaineName').value
  }

  domaineForm(){
    this.domaineFormGroup = this.formBuilder.group({
      domaineName: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  resetForm(){
    return this.domaineFormGroup.reset()
  }

  addDomaine(){
    this.domaineService.createDomaine(this.domaineFormGroup.value)
    this.resetForm()
  }

  loadDomaineList(){
    this.domaineService.getDomaineList().snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val()})))
    ).subscribe(domaines => {this.domaines = domaines})
  }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationLoginComponent,
          ExploitantListComponent, ExploitantCreateComponent, ExploitantDetailComponent,
          FormationListComponent, InnovationListComponent, ProductionListComponent, EvolutionListComponent,
          HomeComponent, 
          DomaineCedarComponent} from "./application";


const routes: Routes = [
  {path: 'login', component: AuthentificationLoginComponent},
  {path: 'exploitantlist', component: ExploitantListComponent},  
  {path: 'exploitantcreate', component: ExploitantCreateComponent},
  {path: 'exploitantlist/:id', component: ExploitantDetailComponent},
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'formationlist', component: FormationListComponent},
  {path: 'innovationlist', component: InnovationListComponent},
  {path: 'productionlist', component: ProductionListComponent},
  {path: 'evolutionlist', component: EvolutionListComponent},
  {path: 'domaine', component: DomaineCedarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

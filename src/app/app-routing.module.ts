import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChemhomeComponent } from './chemhome/chemhome.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'chemistry', component: ChemhomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, ChemhomeComponent]

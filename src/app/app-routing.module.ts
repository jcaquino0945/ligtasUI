import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EvacComponent } from './evac/evac.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EvacdetailComponent } from './evacdetail/evacdetail.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'evac', component: EvacComponent },
  { path: 'evacDetail/:id', component: EvacdetailComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

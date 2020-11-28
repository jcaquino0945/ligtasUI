import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EvacComponent } from './evac/evac.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EvacdetailComponent } from './evacdetail/evacdetail.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'evac', component: EvacComponent },
  { path: 'admin/login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'evacDetail/:id', component: EvacdetailComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

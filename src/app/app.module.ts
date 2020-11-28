import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { EvacComponent } from './evac/evac.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EvacdetailComponent } from './evacdetail/evacdetail.component';

import { baseURL } from './shared/baseurl';
import { HttpClientModule } from '@angular/common/http';

import {EvacsService} from './services/evacs.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EvacComponent,
    PagenotfoundComponent,
    EvacdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EvacsService, {provide: 'baseURL', useValue: baseURL}],
  bootstrap: [AppComponent]
})
export class AppModule { }

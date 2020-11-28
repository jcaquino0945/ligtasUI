import { Injectable } from '@angular/core';
import { Admin } from '../shared/admin';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
//import { delay } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login() {
    return this.http.post
  }
}

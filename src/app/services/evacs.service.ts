import { Injectable } from '@angular/core';
import { Evacs } from '../shared/evacs';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EvacsService {

  constructor(private http: HttpClient) { }
  
  getEvacs(): Observable<Evacs[]> {
    return this.http.get<Evacs[]>(baseURL + '/evacs');
  }
  getAvailableEvacs(): Observable<Evacs[]> {
    return this.http.get<Evacs[]>(baseURL + '/evacs/available');
  }
  getEvac(evacId: number): Observable<Evacs> {
    return this.http.get<Evacs>(baseURL + '/evacs/' + evacId);
  }
  getEvacIds(): Observable<number[] | any> {
    return this.getEvacs().pipe(map(evacs => evacs.map(evacs => evacs._id)));
  }
}

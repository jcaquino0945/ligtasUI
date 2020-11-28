import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {username: '', password: ''};
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.http.post(baseURL + '/admin/login', this.user).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

}

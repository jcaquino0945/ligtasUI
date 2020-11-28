import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  msg: string = '';
  subscribers: any;
  headers = { 'content-type': 'application/json' };
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}
  getVal = (item) => (this.msg = item.target.value);
  sendMsg = () => {
    this.http
      .get(baseURL + '/dashboard/getAllCredentials')
      .toPromise()
      .then((data) => (this.subscribers = data))
      .then((_) =>
        this.subscribers.map((subscriber) => {
          let { access_token, subscriber_number } = subscriber;

          var myHeaders = new Headers();
          myHeaders.append('Content-Type', 'application/json');

          var raw = JSON.stringify({
            outboundSMSMessageRequest: {
              clientCorrelator: '123456',
              senderAddress: '7354',
              outboundSMSTextMessage: { message: this.msg },
              address: `${subscriber_number}`,
            },
          });

          var requestOptions: any = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
          };

          var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl =
              'https://devapi.globelabs.com.ph/smsmessaging/v1/outbound/7354/requests?access_token=' +
              access_token;

          fetch(proxyUrl + targetUrl, requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log('error', error));
        })
      );
  };
}

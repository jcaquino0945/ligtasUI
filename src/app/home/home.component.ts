import { Component, OnInit, Inject } from '@angular/core';
import { Evacs } from '../shared/evacs';
import { EvacsService } from '../services/evacs.service';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  faFacebook = faFacebook;
  faTwitter = faTwitter;

  evacs: Evacs[];

  constructor(private evacsService: EvacsService, @Inject('baseURL') private baseURL) { }

  ngOnInit(): void {
    this.evacsService.getAvailableEvacs().subscribe(evacs => this.evacs = evacs)
  }
 
}

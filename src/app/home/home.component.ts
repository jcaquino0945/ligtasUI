import { Component, OnInit, Inject } from '@angular/core';
import { Evacs } from '../shared/evacs';
import { EvacsService } from '../services/evacs.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
evacs: Evacs[];

  constructor(private evacsService: EvacsService, @Inject('baseURL') private baseURL) { }

  ngOnInit(): void {
    this.evacsService.getAvailableEvacs().subscribe(evacs => this.evacs = evacs)
  }

}

import { Component, OnInit, Inject} from '@angular/core';
import { Evacs } from '../shared/evacs';
import { EvacsService } from '../services/evacs.service';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-evac',
  templateUrl: './evac.component.html',
  styleUrls: ['./evac.component.css']
})
export class EvacComponent implements OnInit {
  faFacebook = faFacebook;
  faTwitter = faTwitter;

  evacs: Evacs[];
  
  constructor(private evacsService: EvacsService, @Inject('baseURL') private baseURL) { }

  ngOnInit(): void {
    this.evacsService.getEvacs().subscribe(evacs => this.evacs = evacs)
  }

}

import { Component, OnInit, Inject} from '@angular/core';
import { Evacs } from '../shared/evacs';
import { EvacsService } from '../services/evacs.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-evacdetail',
  templateUrl: './evacdetail.component.html',
  styleUrls: ['./evacdetail.component.css']
})
export class EvacdetailComponent implements OnInit {
  evac: Evacs;
  evacIds: string[];
  prev: string;
    next: string;
  constructor(private evacService: EvacsService,
    private route: ActivatedRoute,
    private location: Location,
    @Inject('baseURL') private baseURL) { }

  ngOnInit(): void {
    this.evacService.getEvacIds().subscribe(evacIds => this.evacIds = evacIds);
    this.route.params.pipe(switchMap((params: Params)=> this.evacService.getEvac(params['_id']))).subscribe(evac => {this.evac = evac; this.setPrevNext(evac._id);});
  }
  setPrevNext(evacId: string) {
    const index = this.evacIds.indexOf(evacId);
    this.prev = this.evacIds[(this.evacIds.length + index - 1) % this.evacIds.length];
    this.next = this.evacIds[(this.evacIds.length + index + 1) % this.evacIds.length];
  }
  goBack(): void {
    this.location.back();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AnnService } from '../common/services/ann.service';

@Component({
  selector: 'app-ann-detail',
  templateUrl: './ann-detail.component.html',
  styleUrls: ['./ann-detail.component.css']
})
export class AnnDetailComponent implements OnInit {
  ann: any = null;
  constructor(private activatedRoute: ActivatedRoute,
              private annService: AnnService) { }

  ngOnInit() {
    
    this.activatedRoute.params
      .switchMap(params => {
        return this.annService.getAnnoucementDetails(params['id']);
      })
      .subscribe(res => this.ann = res)
      
      
  }

}

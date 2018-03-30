import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ann-summary',
  templateUrl: './ann-summary.component.html',
  styleUrls: ['./ann-summary.component.css']
})
export class AnnSummaryComponent implements OnInit {
  @Input('announcement') ann;
  constructor() { }

  ngOnInit() {
    console.log(this.ann);
  }

}

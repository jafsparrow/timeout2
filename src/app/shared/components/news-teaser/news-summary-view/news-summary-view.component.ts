import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-summary-view',
  templateUrl: './news-summary-view.component.html',
  styleUrls: ['./news-summary-view.component.css']
})
export class NewsSummaryViewComponent implements OnInit {
  @Input() news;
  constructor() { }

  ngOnInit() {
    console.log('below is the news');
    console.log(this.news);
  }

}

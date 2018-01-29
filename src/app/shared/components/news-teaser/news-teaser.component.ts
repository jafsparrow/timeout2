import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-news-teaser',
  templateUrl: './news-teaser.component.html',
  styleUrls: ['./news-teaser.component.css']
})
export class NewsTeaserComponent implements OnInit {
  @Input('news') news: Observable<any>;
  @Input() teaserTitle;
  @Input() isLoading;
  constructor() { }

  ngOnInit() {
    console.log(this.news);
    // this.news.subscribe(res=> console.log(res));
  }

}

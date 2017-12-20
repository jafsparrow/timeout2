import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NewsService } from '../common/services/news.service';

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})
export class NewslistComponent implements OnInit {

  newsList: Observable<any[]>;
  constructor(private newsService: NewsService
              ) {
      this.newsList = this.newsService.getNews();
  }

  ngOnInit() {
  }

  goToDetail(news: any) {

  }
}

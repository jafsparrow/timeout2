import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NewsService } from '../common/services/news.service';

import {ClubDetailsService} from '../common/services/club-details.service';


@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})
export class NewslistComponent implements OnInit {

  newsList: Observable<any[]>;
  isLoading: boolean;
  defaultImage = 'http://www.eglsf.info/wp-content/uploads/submit_news.jpg';
  constructor(private newsService: NewsService,
              private clubDetailService: ClubDetailsService) {
      this.isLoading = true;
      this.newsList = this.newsService.getNews();
        
  }

  ngOnInit() {

  }

  goToDetail(news: any) {

  }
}

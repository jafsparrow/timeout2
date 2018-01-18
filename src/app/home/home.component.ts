import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/service/auth.service';
import { NewsTeaserService } from '../common/services/news-teaser.service';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news: Array<any>;
  isNewsLoading = true;
  favNews: Array<any>;
  isFavNewsLoading = true;
  constructor(private authSerivice: AuthService,
              private newsTeaser: NewsTeaserService) { }

  ngOnInit() {
    this.newsTeaser.getRecentTenNews()
                  .subscribe(res => {
                    this.news = res;
                    if (res.length !== 0) {
                      this.isNewsLoading = false;
                    }
                  });

    this.newsTeaser.getFavClubNewsFive()
                  .subscribe(res => {
                    this.favNews = res;
                    if (res.length !== 0) {
                      this.isFavNewsLoading = false;
                    }
                  });

  }

}

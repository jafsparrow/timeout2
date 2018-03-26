import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/service/auth.service';
import { NewsTeaserService } from '../../services/news-teaser.service';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news: Array<any>;
  isNewsLoading: boolean;
  favNews: Array<any>;
  isFavNewsLoading = true;
  isUserLoggedIn = false;

  events$: Observable<any>;
  constructor(private authSerivice: AuthService,
              private newsTeaser: NewsTeaserService,
              private matcheService: EventsService) {
                this.isNewsLoading = true;
               }

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

   this.events$ = this.matcheService.getThisWeekMatches().valueChanges();
  }



}

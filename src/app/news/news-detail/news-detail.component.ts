import { Component, OnInit } from '@angular/core';
import { ClubDetailsService } from '../common/services/club-details.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { NewsService } from '../common/services/news.service';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit, OnDestroy {
  isLoading;
  tagged_clubs = [];
  activeRoute: any;
  newsId: any;
  news: any;
  constructor(private clubDetailService: ClubDetailsService,
              private activatedRoute: ActivatedRoute,
              private newsService: NewsService,
              private route: Router) {
    this.isLoading = true;
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 2000);

    this.activatedRoute.params
      .switchMap(params => {
        const id = params['id'];
        return this.newsService.getDetailedNews(id);
        // console.log(news$);
        // return Observable.of(1);
      })

      .subscribe(res => {
        console.log(res);
        this.news = res;
        console.log('this is after subscribing inside details');
        if (this.news.tagged_clubs) {
          this.getClubDetails(this.news.tagged_clubs);
        }
        this.isLoading = false;
        
          
      });
    
    //   subscribe(params => {
    //   console.log(params);
    //   this.news = this.newsService.getDetailedNews(params['id']);
    // });
    

  }


  getClubDetails(keys) {
    // const keys = ['5ZRSBNKpB1u2OJ0urK0w',
    // 'HYU2JPaH9ys1nKQOHKKE'];
    this.clubDetailService.getTaggedClubs(keys)
      .subscribe(res => {
        console.log('from inside the details component');
        this.tagged_clubs = res;
        

      });
  }

  navigateToClubDetails(club) {
    console.log(club);
    this.route.navigate(['clubs/detail', club.id]);
  }

  ngOnDestroy() {
    // this.activeRoute.unsubscribe();
  }
}

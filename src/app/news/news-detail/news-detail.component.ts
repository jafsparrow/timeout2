import { Component, OnInit } from '@angular/core';
import { ClubDetailsService } from '../common/services/club-details.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  isLoading;
  tagged_clubs = [];
  constructor(private clubDetailService: ClubDetailsService) {
    this.isLoading = true;
  }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);

    this.getClubDetails();
  }


  getClubDetails() {
    const keys = ['5ZRSBNKpB1u2OJ0urK0w',
    'HYU2JPaH9ys1nKQOHKKE'];
    this.clubDetailService.getTaggedClubs(keys)
      .subscribe(res => {
        console.log('from inside the details component');
        this.tagged_clubs = res;
      });
  }

  navigateToClubDetails(club) {
    console.log(club);
  }
}

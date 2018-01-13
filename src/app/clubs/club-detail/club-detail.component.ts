import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-club-detail',
  templateUrl: './club-detail.component.html',
  styleUrls: ['./club-detail.component.css']
})
export class ClubDetailComponent implements OnInit {
  news = {
    banner: 'http://www.clubcontrol.co.uk/wp-content/uploads/2016/01/Club-Control-Main-Banner-BG.jpg',
    logo: 'http://diylogodesigns.com/blog/wp-content/uploads/2015/12/creative-football-club-logo-design-uk-14.png'
  }

  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom = 15;

  constructor() { }

  ngOnInit() {
  }

}

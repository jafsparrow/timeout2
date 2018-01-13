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

  lat: number = 11.077235;
  lng: number = 75.958312;
  zoom = 15;

  events= [
    {
      title: 'blah blah event',
      matches: [
        {
          team1: {
            name: 'Jamalu',
            score: 5
          },
          team2: {
            name: 'Fifa Manjeri',
            score: 24
          }
        },
        {
          team1: {
            name: 'abu dai',
            score: 5
          },
          team2: {
            name: 'Fifa alkulth',
            score: 24
          }
        }
      ]
    },
    {
      title: 'BPL leagure',
      matches: [
        {
          team1: {
            name: 'Liverpool',
            score: 5
          },
          team2: {
            name: 'brightonm',
            score: 24
          }
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

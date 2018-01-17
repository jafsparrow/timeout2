import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  news = {
    banner: 'http://www.clubcontrol.co.uk/wp-content/uploads/2016/01/Club-Control-Main-Banner-BG.jpg',
    logo: 'http://kb4images.com/images/profile-pictures/38165921-profile-pictures.jpg'
  }
  constructor() { }

  ngOnInit() {
  }

}

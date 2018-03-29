import { Component, OnInit, Input } from '@angular/core';
import { Annoucement } from '../../../common/modals/annoucement';

@Component({
  selector: 'app-announcement-teaser',
  templateUrl: './announcement-teaser.component.html',
  styleUrls: ['./announcement-teaser.component.css']
})
export class AnnouncementTeaserComponent implements OnInit {
  @Input('announcement') announcement: Annoucement;

  constructor() { 
    
  }

  ngOnInit() {
    // console.log(this.announcement);
    console.log(this.announcement.prizeDetails)
  }

}

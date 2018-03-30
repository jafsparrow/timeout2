import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AnnService } from '../common/services/ann.service';

@Component({
  selector: 'app-ann-list',
  templateUrl: './ann-list.component.html',
  styleUrls: ['./ann-list.component.css']
})
export class AnnListComponent implements OnInit {
  annList$: Observable<any[]>;
  defaultImage = 'http://www.eglsf.info/wp-content/uploads/submit_news.jpg';
  
  constructor(private annService: AnnService) { 
    // this.annList$ = Observable.of([
    //   { title: 'first title Angular is running in the development mode. Call  Angular is running in the development mode. Call ' , published_date: new Date()},
    //   { title: 'second title', published_date: new Date()}
    // ])

    this.annList$ = this.annService.getAnnouncements();
  }

  ngOnInit() {
  }

}

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsAdminService } from '../../common/services/news-admin.service';

@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.css']
})
export class NewsEditComponent implements OnInit {
  // newsEditForm: FormGroup;
  newsEditForm = this.formBuilder.group({
    title:  new FormControl(),
    summary: new FormControl(),
    published_date: new FormControl,
    tagged_clubs: new FormControl(),
    content: new FormControl()
  });
  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private newsService: NewsAdminService) {
   }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   console.log(params);
    //   this.newsEditForm.setValue({title: 'hello world'});
    // });
    this.route.params
      .switchMap(res => {
        const id = res['id'];
        return this.newsService.readNews(id);
      })
      .subscribe(res => {
        console.log(res);
        this.newsEditForm.setValue({
          title: 'test hello title',
          content: 'this shouls set as contennt',
          summary: '',
          published_date: 'test',
          tagged_clubs: 'tes'
        });
      });



  }

}

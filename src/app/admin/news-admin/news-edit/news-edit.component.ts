import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsAdminService } from '../../common/services/news-admin.service';

import { News } from '../../common/modals/news';
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
    published_date: new FormControl(),
    article: new FormControl()
  });
  currentNewsKey: string;
  isUpdating = false;
  constructor(private route: ActivatedRoute,
              private router: Router,
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
        this.currentNewsKey = id;
        return this.newsService.readNews(id);
      })
      .subscribe(
        (res) => {
        console.log(res);
        this.newsEditForm.setValue({
          title: res.title,
          article: res.article || 'test',
          summary: res.summary,
          published_date: new Date(res.published_date)
        });
      });



  }

  updateNews() {
    this.isUpdating = true;
    console.log(this.newsEditForm);
    this.newsService.updateNews(this.currentNewsKey, this.newsEditForm.value)
      .then(res => {
        console.log('new has been updated.');
        this.router.navigate(['admin/news']);
      });
  }

}

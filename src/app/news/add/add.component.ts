import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith, map } from 'rxjs/operators';

import { FileUpload } from '../common/modals/file-uploader';
import { NewsService } from '../common/services/news.service';
import { ClubDetailsService } from '../common/services/club-details.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  startDate = new Date();
  title = new FormControl('', [Validators.required]);
  published_date = new FormControl('', [Validators.required]);
  summary = new FormControl('', [Validators.required, Validators.minLength(50)]);
  tagged_clubs = new FormControl('', [Validators.required]);
  content = new FormControl('');

  selectedFiles: FileList | null;
  createdNewsKey: any = null;
  clubList = [];
  // clubList = [ { name: 'PFC Kunnumpuram', key: 'key1'},
  //     { name: 'KASC', key: 'key1'},
  //     { name: 'Fifa Manjeri', key: 'key1'},
  //     { name: 'Balck and White', key: 'key1'},
  //     { name: 'Al Madina', key: 'key1'},
  //     { name: 'ALS Makappuram', key: 'key1'}
  //   ];


  articleAddFrom: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private newService: NewsService,
    private clubDetailService: ClubDetailsService) {

      this.articleAddFrom = this.formBuilder.group({
        title: this.title,
        summary: this.summary,
        published_date: this.published_date,
        tagged_clubs: this.tagged_clubs,
        content: this.content
      });

     }

  ngOnInit() {
    // get all the club details in id and value.
    this.clubDetailService.getAllclubs()
      .subscribe(res => {
        console.log(res);
        this.clubList = res;
      });
  }


  submitNews() {
    console.log(this.articleAddFrom);
    this.newService.createNews(this.articleAddFrom.value)
      .then(res => {
        if (res) {
          // save the news id in a local variable.
          this.createdNewsKey = res.id;
          if (this.selectedFiles && this.selectedFiles.length === 1) {
            this.uploadImage();
          }
        }
      });
  }



  fileSelection($event) {
    console.log($event.target.files);
    this.selectedFiles = ($event.target as HTMLInputElement).files;
  }

  uploadImage() {
    const file = this.selectedFiles;
    if (file && file.length === 1) {
      const currentUpload: FileUpload = new FileUpload(file.item(0));
      this.newService.uploadNewsImage(currentUpload)
        .then(res => {
          const downloadUrl = res.downloadURL;
          console.log(downloadUrl);
          // update the news with the new download URL
          this.newService.updateNewsAfterImageLoad(this.createdNewsKey, downloadUrl);

        });
    } else {
      console.error('No file found!');
    }
  }


}

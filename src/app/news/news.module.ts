import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule  } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { NewsRoutingModule } from './news-routing.module';
import { NewslistComponent } from './newslist/newslist.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { AddComponent } from './add/add.component';

import { NewsService } from './common/services/news.service';

import { ClubDetailsService } from './common/services/club-details.service';
import { UserDetailsService } from './common/services/user-details.service';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    SharedModule

  ],
  declarations: [NewslistComponent, NewsDetailComponent, AddComponent],
  providers: [NewsService, ClubDetailsService, UserDetailsService]
})
export class NewsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewslistComponent } from './newslist/newslist.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { AddComponent } from './add/add.component';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  declarations: [NewslistComponent, NewsDetailComponent, AddComponent]
})
export class NewsModule { }

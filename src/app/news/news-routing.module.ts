import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewslistComponent } from './newslist/newslist.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: NewslistComponent,
  },
  {
    path: 'detail/:id',
    component: NewsDetailComponent,
    pathMatch: 'full'
  },
  {
    path: 'add',
    component: AddComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }

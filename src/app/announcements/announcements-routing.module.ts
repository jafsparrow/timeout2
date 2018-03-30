import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnListComponent } from './ann-list/ann-list.component';
import { AnnDetailComponent } from './ann-detail/ann-detail.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: AnnListComponent,
  },
  {
    path: 'detail/:id',
    component: AnnDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnouncementsRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClublistComponent } from './clublist/clublist.component';
import { ClubDetailComponent } from './club-detail/club-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: ClublistComponent
  },
  {
    path: 'detail/:id',
    component: ClubDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubsRoutingModule { }

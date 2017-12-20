import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClublistComponent } from './clublist/clublist.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: ClublistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubsRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { NewsAdminComponent } from './news-admin/news-admin.component';
import { NewsAddComponent } from './news-admin/news-add/news-add.component';
import { NewsDashboardComponent } from './news-admin/news-dashboard/news-dashboard.component';
import { NewsEditComponent } from './news-admin/news-edit/news-edit.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { EventAdminComponent } from './event-admin/event-admin.component';
import { EventAddComponent } from './event-admin/event-add/event-add.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dash',
    pathMatch: 'full'
  },
  {
    path: 'dash',
    component: AdminComponent
  },
  {
    path: 'news',
    component: NewsAdminComponent,

    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: NewsDashboardComponent
      },
      {
        path: 'add',
        component: NewsAddComponent,
      },
      {
        path: 'edit/:id',
        component: NewsEditComponent,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'events',
    component: EventAdminComponent,
    children: [
      {
        path: 'add',
        component: EventAddComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }


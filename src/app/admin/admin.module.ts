import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NewsAdminComponent } from './news-admin/news-admin.component';
import { EventAdminComponent } from './event-admin/event-admin.component';
import { FixtureAdminComponent } from './fixture-admin/fixture-admin.component';
import { ClubAdminService } from './common/services/club-admin.service';
import { NewsAdminService } from './common/services/news-admin.service';
import { NewsAddComponent } from './news-admin/news-add/news-add.component';
import { NewsDashboardComponent } from './news-admin/news-dashboard/news-dashboard.component';


import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { NewsEditComponent } from './news-admin/news-edit/news-edit.component';
import { SharedModule } from '../shared/shared.module';
import { EventAddComponent } from './event-admin/event-add/event-add.component';
import { EventsAdminService } from './common/services/events-admin.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    SharedModule
  ],
  declarations: [
    AdminComponent,
    NewsAdminComponent,
    EventAdminComponent,
    FixtureAdminComponent,
    NewsAddComponent,
    NewsDashboardComponent,
    NewsEditComponent,
    EventAddComponent],
  providers: [ClubAdminService, NewsAdminService, EventsAdminService]
})
export class AdminModule { }

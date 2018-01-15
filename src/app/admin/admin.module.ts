import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule} from './material.module';
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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AdminRoutingModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  declarations: [AdminComponent, NewsAdminComponent, EventAdminComponent, FixtureAdminComponent, NewsAddComponent, NewsDashboardComponent, NewsEditComponent],
  providers: [ClubAdminService, NewsAdminService]
})
export class AdminModule { }

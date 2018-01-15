import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule} from './material.module';
import {AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NewsAdminComponent } from './news-admin/news-admin.component';
import { EventAdminComponent } from './event-admin/event-admin.component';
import { FixtureAdminComponent } from './fixture-admin/fixture-admin.component';
import { ClubAdminService } from './common/services/club-admin.service';
import { NewsAdminService } from './common/services/news-admin.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, NewsAdminComponent, EventAdminComponent, FixtureAdminComponent],
  providers: [ClubAdminService, NewsAdminService]
})
export class AdminModule { }

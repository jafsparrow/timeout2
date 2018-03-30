import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnouncementsRoutingModule } from './announcements-routing.module';
import { AnnListComponent } from './ann-list/ann-list.component';
import { AnnDetailComponent } from './ann-detail/ann-detail.component';
import { SharedModule } from '../shared/shared.module';
import { AnnSummaryComponent } from './ann-summary/ann-summary.component';
import { AnnService } from './common/services/ann.service';

@NgModule({
  imports: [
    CommonModule,
    AnnouncementsRoutingModule,
    SharedModule
  ],
  declarations: [AnnListComponent, AnnDetailComponent, AnnSummaryComponent],
  providers: [AnnService]
})
export class AnnouncementsModule { }

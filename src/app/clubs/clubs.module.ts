import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Firebase imports
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AgmCoreModule } from '@agm/core';


import { MaterialModule } from './material.module';
import { ClubsRoutingModule } from './clubs-routing.module';
import { ClublistComponent } from './clublist/clublist.component';
import { DetailComponent} from './detail/detail.component';
import { ClubViewComponent} from './club-view/club-view.component';
import { AddComponent } from './add/add.component';
import { ClubDetailComponent } from './club-detail/club-detail.component';
import { ClubsService } from './common/services/clubs.service';
import { SeasonTeaserComponent } from './season-teaser/season-teaser.component';
import { MatchSummaryComponent } from './match-summary/match-summary.component';
import { TeamViewComponent } from './match-summary/team-view/team-view.component';

@NgModule({
  imports: [
    CommonModule,
    ClubsRoutingModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    MaterialModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDi927U8H8Zp4VDzQM7llzbaJDqXlTAELs'
    })
  ],
  declarations: [
      ClublistComponent,
      DetailComponent,
      AddComponent,
      ClubViewComponent,
      ClubDetailComponent,
      SeasonTeaserComponent,
      MatchSummaryComponent,
      TeamViewComponent
    ],
  providers: [ClubsService]
})
export class ClubsModule { }

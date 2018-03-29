import { NgModule, ModuleWithProviders } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './service/auth.service';
import { MaterialModule } from '../material.module';

import { FlexLayoutModule } from '@angular/flex-layout';
// local components
import { NewsTeaserComponent } from './components/news-teaser/news-teaser.component';
import { MatchViewComponent } from './components/match-view/match-view.component';
import { MatchTeamViewComponent } from './components/match-view/match-team-view/match-team-view.component';
import { AnnouncementTeaserComponent } from './components/announcement-teaser/announcement-teaser.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule
  ],
  declarations: [
    NewsTeaserComponent,
    MatchViewComponent,
    MatchTeamViewComponent,
    AnnouncementTeaserComponent
  ],
  exports: [
    MaterialModule,
    NewsTeaserComponent,
    AnnouncementTeaserComponent,
    FlexLayoutModule
  ],
  providers: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ AuthService ]
    };
  }
}

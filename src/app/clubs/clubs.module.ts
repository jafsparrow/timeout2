import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubsRoutingModule } from './clubs-routing.module';
import { ClublistComponent } from './clublist/clublist.component';
import { DetailComponent} from './detail/detail.component';
import { ClubViewComponent} from './club-view/club-view.component';
import { AddComponent } from './add/add.component';

@NgModule({
  imports: [
    CommonModule,
    ClubsRoutingModule
  ],
  declarations: [ClublistComponent, DetailComponent, AddComponent, ClubViewComponent]
})
export class ClubsModule { }

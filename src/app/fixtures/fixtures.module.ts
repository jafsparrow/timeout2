import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FixturesRoutingModule } from './fixtures-routing.module';
import { FixturelistComponent } from './fixturelist/fixturelist.component';

@NgModule({
  imports: [
    CommonModule,
    FixturesRoutingModule
  ],
  declarations: [FixturelistComponent]
})
export class FixturesModule { }

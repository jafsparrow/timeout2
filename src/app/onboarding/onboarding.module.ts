import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { OnboardComponent } from './onboard/onboard.component';
import { SharedModule } from '../shared/shared.module';
import { TempComponent } from './temp/temp.component';
import { ClubDetailsService } from './services/club-details.service';


@NgModule({
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [OnboardComponent, TempComponent],
  providers: [ClubDetailsService]
})
export class OnboardingModule { }

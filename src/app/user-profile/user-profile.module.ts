import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserProfileRouting} from './profile-routing.module';
import { MaterialModule} from './material.module';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { CanReadGuard } from './common/guards/can-read.guard';
import { AdminGuard } from './common/guards/admin.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    UserProfileRouting,
    MaterialModule,
    SharedModule
  ],
  declarations: [ProfileComponent, ProfileEditComponent],
  providers: [CanReadGuard, AdminGuard]
})
export class UserProfileModule { }

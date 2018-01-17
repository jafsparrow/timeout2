import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserProfileRouting} from './profile-routing.module';
import { MaterialModule} from './material.module';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

@NgModule({
  imports: [
    CommonModule,
    UserProfileRouting,
    MaterialModule
  ],
  declarations: [ProfileComponent, ProfileEditComponent]
})
export class UserProfileModule { }

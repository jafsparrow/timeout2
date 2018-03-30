import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './common/components/home/home.component';
import { LoginComponent } from './common/components/login/login.component';
import { SignUpComponent } from './common/components/sign-up/sign-up.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'news',
    loadChildren: './news/news.module#NewsModule',
  },
  {
    path: 'clubs',
    loadChildren: './clubs/clubs.module#ClubsModule',
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: './user-profile/user-profile.module#UserProfileModule'
  },
  {
    path: 'announcements',
    loadChildren: './announcements/announcements.module#AnnouncementsModule',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signUp',
    component: SignUpComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

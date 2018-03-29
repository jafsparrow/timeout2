import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AngularFireModule  } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
// import { ContainerComponent } from './container/container.component';
import { ToolbarComponent } from './common/components/home/toolbar/toolbar.component';
// import { SidenavComponent } from './container/sidenav/sidenav.component';
// import { MainContainerComponent } from './container/main-container/main-container.component';

import { environment } from '../environments/environment';
import { HomeComponent } from './common/components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { NewsTeaserService } from './common/services/news-teaser.service';
import { LoginComponent } from './common/components/login/login.component';
import { SignUpComponent } from './common/components/sign-up/sign-up.component';
import { SnackbarComponent } from './common/components/snackbar/snackbar.component';
import { EventsService } from './common/services/events.service';
import { AuthGuard } from './shared/guards/auth.guard';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    // ContainerComponent,
    ToolbarComponent,
    // SidenavComponent,
    // MainContainerComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    SnackbarComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,

    SharedModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  entryComponents: [SnackbarComponent],
  providers: [NewsTeaserService, EventsService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

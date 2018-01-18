import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AngularFireModule  } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ToolbarComponent } from './container/toolbar/toolbar.component';
import { SidenavComponent } from './container/sidenav/sidenav.component';
import { MainContainerComponent } from './container/main-container/main-container.component';

import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { NewsTeaserComponent } from './home/news-teaser/news-teaser.component';
import { NewsTeaserService } from './common/services/news-teaser.service';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ToolbarComponent,
    SidenavComponent,
    MainContainerComponent,
    HomeComponent,
    NewsTeaserComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    SharedModule.forRoot()
  ],
  providers: [NewsTeaserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

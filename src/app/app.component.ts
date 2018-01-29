import { Component, OnInit, AfterViewInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { SnackbarComponent } from './snackbar/snackbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  isLoggedIn = true;
  constructor(public snackBar: MatSnackBar) {
    console.log('just to test if it run while doing directly to other pages');
    if ( this.isLoggedIn ) {
      this.snackBar.openFromComponent(SnackbarComponent);
    }
 
    
    
  }

  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.snackBar.openFromComponent(SnackbarComponent);
    // }, 2000);

    // this.snackBar.openFromComponent(SnackbarComponent);
  }


}

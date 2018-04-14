import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  googleLogin() {
    this.authService.googleLogin()
      .then(res => {
        console.log('logged in successfully');
        console.log(res);
        this.checkOnBoardingStatus();
      }).catch(error => console.log(error));
  }

  checkOnBoardingStatus(): any {
    this.authService.user$
        .subscribe(user => {
          if(!user) return;
          console.log(user);
        })
  }

}

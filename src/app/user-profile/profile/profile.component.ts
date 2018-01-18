import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  news = {
    banner: 'http://www.clubcontrol.co.uk/wp-content/uploads/2016/01/Club-Control-Main-Banner-BG.jpg',
    logo: 'http://kb4images.com/images/profile-pictures/38165921-profile-pictures.jpg'
  };
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.googleLogin();
  }

}

// user: User;
// ngOnInit() {
//   this.auth.user$.subscribe(user => this.user = user)
// }
// editPost() {
//   if(this.auth.canEdit(this.user)) {
//     this.postRef.update({ title: 'Edited Title!'})
//   } 
//   else {
//     console.error('you are not allowed to do that!')
//   }
// }

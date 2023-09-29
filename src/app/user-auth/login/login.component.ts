import { Component } from '@angular/core';
import { UserLoginTemplet } from 'src/app/user-login-templet';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private router: Router, private sharedService: SharedService) { }
  user: any = {
    name: '',
    email: '',
    password: ''
  };
  loginUsers: UserLoginTemplet[] = [
    {
      Name: 'Chinmay',
      Email: 'csinnarkar@gmail.com',
      Password: 'Netwin@123'
    },
    {
      Name: 'Chaitanya',
      Email: 'chaitanyasinnarkar@gmail.com',
      Password: 'Ceat@123'
    },
    {
      Name: 'Omkar',
      Email: 'omkar@gmail.com',
      Password: 'Netwin@123'
    }
  ]
  matchingUser: UserLoginTemplet | any;

  login() {
    this.matchingUser = this.loginUsers.find(u => u.Email === this.user.email && u.Password === this.user.password);
    this.sharedService.setSharedVariable(this.matchingUser);
    // if (this.matchingUser) {
    //   // User is authenticated, perform the desired action (e.g., navigate to another page)
    //   console.log('User authenticated:', this.matchingUser);
    this.router.navigate(['welcome']);
    // } else {
    //   // Authentication failed, handle the error (e.g., display an error message)
    //   window.alert('Authentication failed');
    //   console.log('Authentication failed');
    // }
  }
}

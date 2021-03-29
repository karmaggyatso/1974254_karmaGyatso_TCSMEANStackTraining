import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public router: Router) {}

  loginRef = new FormGroup({
    user: new FormControl(),
    pass: new FormControl(),
  });

  objJson = [];

  ngOnInit(): void {}

  uuidv4() {
    //generates unique UUID number for session token
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  loginStatus() {
    console.log('login status was clicked');
    let user = this.loginRef.get('user')?.value;
    let pass = this.loginRef.get('pass')?.value;

    let objJson = JSON.parse(sessionStorage.getItem('userSession') || '{}');

    if (user === objJson.userName && pass === objJson.pass) {
      console.log('login successful');
      sessionStorage.setItem('token', JSON.stringify(this.uuidv4())); //assigns UUID as session token
      this.router.navigate(['home']);
    } else {
      console.log('login failed');
    }

    console.log(objJson);
  }

  createNewAccount() {
    console.log('create new account was clicked');
    this.router.navigate(['signup']);
  }
}

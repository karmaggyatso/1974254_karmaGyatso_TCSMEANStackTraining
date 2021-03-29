import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(public router: Router) {}

  msg = '';

  signUpRef = new FormGroup({
    userName: new FormControl(),
    pass: new FormControl(),
  });

  ngOnInit(): void {}

  // userDetail: Array<string> = new Array();

  onSubmit() {
    // userCredentials."userName" = this.signUpRef.get('userName')?.value;
    // userCredentials.password = this.signUpRef.get('pass')?.value;
    let userName = this.signUpRef.get('userName')?.value;
    let pass = this.signUpRef.get('pass')?.value;

    const userCredentials = {
      userName: userName,
      pass: pass,
    };

    // this.userDetail.push(userCredentials);

    sessionStorage.setItem('userSession', JSON.stringify(userCredentials));

    console.log(userCredentials);

    console.log('successful registration');
    this.router.navigate(['login']);
  }
}

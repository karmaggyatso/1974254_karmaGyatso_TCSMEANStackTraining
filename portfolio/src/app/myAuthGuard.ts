import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable() // pre-defined interface
export class MyAuthGuard implements CanActivate {
  //import in app.module.ts "provider"
  // and then in the app-routing.module.ts, apply CanActivate:[MyAuthGuard] in the route you want to protect
  constructor(public router: Router) {}
  canActivate() {
    // pre-defined methods.
    let obj = sessionStorage.getItem('token'); //this is set in login.comp.ts
    //it will check if the session storage is empty or not and then checks the below conditions

    console.log('AuthGuard');
    console.log(obj);
    if (obj != null) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
    // return false;
    // console.log("can't change path without login");
  }
}

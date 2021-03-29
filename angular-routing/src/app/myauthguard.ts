import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable() //pre-defined interface
export class MyAuthGuard implements CanActivate {
  //register in the "provider" in app.module.ts
  constructor(public router: Router) {}
  canActivate() {
    //pre-defined methods

    let obj = sessionStorage.getItem('token');

    if (obj != null) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false; //
    }
  }
}

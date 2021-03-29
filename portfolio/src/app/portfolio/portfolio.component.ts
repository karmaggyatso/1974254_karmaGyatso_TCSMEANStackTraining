import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PortfolioDetail } from '../portfolio.details';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  portfolioRef = new FormGroup({
    contactName: new FormControl(),
    phoneNumber: new FormControl(),
  });

  portfolioDetails: Array<PortfolioDetail> = new Array();

  onSave() {
    let userName = this.portfolioRef.get('contactName')?.value;
    let phoneNumber = this.portfolioRef.get('phoneNumber')?.value;

    let records = {
      userName: userName,
      phoneNumber: phoneNumber,
    };

    let obj = new PortfolioDetail(userName, phoneNumber);
    this.portfolioDetails.push(obj);

    console.log('from on save');
    console.log(records);

    this.sessionInStorage();
  }

  sessionInStorage() {
    sessionStorage.setItem('contacts', JSON.stringify(this.portfolioDetails));
  }

  displayRecords = function () {
    let contacts = JSON.parse(sessionStorage.getItem('contacts') || '{}');
    console.log('from Display Records');
    console.log(contacts);

    let divElement = document.createElement('div');
    divElement.classList.add('container');

    for (let i = 0; i < contacts.length; i++) {
      let phoneContacts = `
        <div class = "">
          <p class= ""> ${contacts.userName} </p>
          <p class= ""> ${contacts.phoneNumber} </p>
      `;
    }
  };

  logout() {
    sessionStorage.removeItem('token'); //it removes the token key from the session and the obj becomes null
    //so that user cannot access other homepage without logging in.
    this.router.navigate(['login']);
  }
}

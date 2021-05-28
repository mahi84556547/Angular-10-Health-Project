import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.css']
})
export class PharmacyComponent implements OnInit {
  model = {
    owerfullname: '',
    phonenumber: '',
    company_creation_date : '',
    location : '',
    email: '',
    pharmacy_name : '',
    password : '',
  };
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    return false;
  }
}

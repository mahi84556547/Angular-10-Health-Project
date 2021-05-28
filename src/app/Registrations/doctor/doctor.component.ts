import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  model = {
    firstname : '',
    lastname : '',
    phonenumber : '+91',
    birth_date : '',
    address : '',
    email : '',
    badgeID : '',
    password : '',
    username : '',

  };
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
console.log(this.model)
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurance-company',
  templateUrl: './insurance-company.component.html',
  styleUrls: ['./insurance-company.component.css']
})
export class InsuranceCompanyComponent implements OnInit {
model = {
  company_full_name : '',
  company_number : '',
  company_creation_date : '',
  location : '',
  email : '',
  company_code : '',
  website: '',
  company_name: '',
}
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    return true;
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  model = {
    firstname : '',
    lastname : '',
    phonenumber : '',
    birth_date : '',
    adress : '',
    email : '',
    badgeID : '',
    password : '',
    company_name :'',
    policy_number: '',
    username : '',

  } ;
  model1 = {title: '3rd post'} ;
emailPatern = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$';

postdata = {test: 'my content',
          };

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.httpClient.post(`http://127.0.0.1:8002/api/lists`,  this.model1).subscribe((data: any) => {console.log(data); });

  }
}

import { PharmacyComponent } from './Registrations/pharmacy/pharmacy.component';
import { PatientComponent } from './Registrations/patient/patient.component';
import { InsuranceCompanyComponent } from './Registrations/insurance-company/insurance-company.component';
import { DoctorComponent } from './Registrations/doctor/doctor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
{
  path : 'doctor', component : DoctorComponent
},
{
  path : 'insurance', component : InsuranceCompanyComponent
},
{
  path : 'patient', component : PatientComponent
},
{
  path : 'pharmacy', component : PharmacyComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

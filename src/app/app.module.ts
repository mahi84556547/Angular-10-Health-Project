import { PharmacyComponent } from './Registrations/pharmacy/pharmacy.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';

import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { DoctorComponent } from './registrations/doctor/doctor.component';
import { PatientComponent } from './registrations/patient/patient.component';
import { InsuranceCompanyComponent } from './registrations/insurance-company/insurance-company.component';

@NgModule({
  declarations: [
    AppComponent,
   NavbarComponent,
   FooterComponent,
   HomeComponent,
   DoctorComponent,
   PatientComponent,
   PharmacyComponent,
   InsuranceCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

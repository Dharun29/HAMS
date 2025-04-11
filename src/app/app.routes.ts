import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component'; 
import { WelcomeComponent } from './welcome/welcome.component';
import { AppComponent } from './app.component';
import { PatientDashboardComponent } from './dashboard/patient-dashboard/patient-dashboard.component';
import { DoctorDashboardComponent } from './dashboard/doctor-dashboard/doctor-dashboard.component';
import { AuthGuard } from './guards/auth.guard'; // Assuming you have an AuthGuard



export const routes: Routes = [
  {path:'',component:AppComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'welcome',component:WelcomeComponent},
  { path: 'patientdashboard', component: PatientDashboardComponent } ,
  { path: 'doctordashboard', component: DoctorDashboardComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' } 
];

  //{ path: 'default-dashboard', component: DefaultDashboardComponent }, // Added default dashboard route
  


 



  
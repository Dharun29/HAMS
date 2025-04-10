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
  { path: 'patient/dashboard', component: PatientDashboardComponent, canActivate: [AuthGuard], data: { roles: ['Patient'] } },
  { path: 'doctor/dashboard', component: DoctorDashboardComponent, canActivate: [AuthGuard], data: { roles: ['Doctor'] } },
  { path: '**', redirectTo: '/login', pathMatch: 'full' } 
];


 



  
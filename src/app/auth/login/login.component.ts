import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // Ensure this path is correct
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports:[CommonModule,FormsModule,RouterModule],
  providers:[],
  standalone:true
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  res:any;
  role: string = '';

  constructor(private authService: AuthService,private router:Router) {}

  onLogin() {
this.authService.login(this.username, this.password).subscribe(value => {
   this.res = value;
   if (this.res != null) {
   console.log('Login successful');
   
//console.log('Token received:', this.res.token); // Log the token received
 this.authService.storeToken(this.res.token); // Store the token
// console.log('Token stored:', localStorage.getItem('userToken')); 

   this.role = this.res.role; // Assuming the response contains a role property
   if (this.role === 'Doctor') {
   this.router.navigate(['patientdashboard']);
  } else if (this.role === 'Patient') {
   this.router.navigate(['doctordashboard']);
 }
   } else {
  console.log('Login failed');
   }
  });}}

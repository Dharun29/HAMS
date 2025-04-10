import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule,Routes } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  imports: [CommonModule, FormsModule,RouterModule],
  providers: [],
  standalone: true
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  role: string = '';
  res: any;
  errorMessage: any;

  constructor(private authService: AuthService,private router:Router) {}

  onRegister() {
    this.authService.register(this.username, this.password, this.role).subscribe(response => {
      if (response.error) {
        this.errorMessage = response.error;
      } else {
        console.log('Registration successful');
        this.router.navigate(['/login']);
        this.errorMessage = '';
      }
    });
}}

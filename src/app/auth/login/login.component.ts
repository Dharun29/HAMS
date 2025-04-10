import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // Ensure this path is correct
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login(this.username, this.password).subscribe(value=>{
      this.res=value;
    }

    );
    if (this.res!=null) {
      console.log('Login successful');
    } else {
      console.log('Login failed');
    }
  }
}

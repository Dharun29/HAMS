import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7277/api/Users';
  private http:HttpClient;

  constructor(http: HttpClient) {
    this.http=http;
  }
  

  login(username: string, password: string): Observable<any> {
    const loginData = { username, password, role:'Patient'};
   // this.apiUrl+="/login";
    return this.http.post<any>(`${this.apiUrl}/login`, loginData);
  }

  register(username: string, password: string, role: string): Observable<any> {
    const registerData = { username, password, role };
    return this.http.post<any>(`${this.apiUrl}/register`, registerData);
  }

  getCurrentUser(): Observable<any> {
    const token = localStorage.getItem('userToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${this.apiUrl}/me`, { headers });
  }
  
    isLoggedIn(): boolean {
      return !!localStorage.getItem('userToken');
    }

    logout(){
      localStorage.removeItem('userToken');
    }
    
storeToken(token: string): void {
   localStorage.setItem('userToken', token);
   }
   
getToken(): string | null {
   return localStorage.getItem('userToken');
  }
  
  
    

  
  
}







 




 

  

 
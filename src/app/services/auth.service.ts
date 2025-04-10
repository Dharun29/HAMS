import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7277/api/Users';
  private http:HttpClient;

  constructor( http: HttpClient) {
    this.http=http;
  }

  login(username: string, password: string): Observable<any> {
    const loginData = { username, password};
    this.apiUrl+="/login";
    return this.http.post<any>(this.apiUrl, loginData);
  }

  register(username: string, password: string, role: string): Observable<any> {
    const registerData = { username, password, role };
    return this.http.post<any>(`${this.apiUrl}/register`, registerData);
  }
  
    isLoggedIn(): boolean {
      return !!localStorage.getItem('userToken');
    }
  
}

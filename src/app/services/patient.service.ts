import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
    providedIn: 'root'
})
export class PatientService {
    private baseUrl = 'https://localhost:7277/api/'; // Adjust to your API endpoint
 
    constructor(private http: HttpClient) { }
 
    getPatientProfile(patientId: number): Observable<any> {
        const apiUrl = `${this.baseUrl}PatientProfile/${patientId}`;
        return this.http.get<any>(apiUrl);
    }
    
    updatePatientProfile(patientId: number, profile: any): Observable<any> {
        const apiUrl = `${this.baseUrl}PatientProfile/${patientId}`;
        return this.http.put<any>(apiUrl, profile);
    }
    
    getPatientAppointments(patientId: number): Observable<any[]> {
        const apiUrl = `${this.baseUrl}Appointment/${patientId}`;
        return this.http.get<any[]>(apiUrl);
    }
    
 
    getPatientNotifications(patientId: number): Observable<Notification[]> {
        const apiUrl = `${this.baseUrl}Notification/${patientId}`;
        return this.http.get<Notification[]>(apiUrl);
    }
    
    // Other patient-related API calls can be added here
}
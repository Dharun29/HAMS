import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { HeaderComponent } from "../../shared/header/header.component";
import { CommonModule } from '@angular/common';
 
interface Appointment {
  appointmentDate: string;
  doctorName: string;
  // ... other appointment properties
}
 
interface Notification {
  message: string;
  timestamp: string;
  // ... other notification properties
}
 
@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css'],
  imports: [HeaderComponent,CommonModule]
})
export class PatientDashboardComponent implements OnInit {
  patientName = '';
  userId: number | null = null;
  upcomingAppointments: Appointment[] = [];
  notifications: Notification[] = [];
  loading = true; // Add loading state
 
  constructor(
    private authService: AuthService,
    private patientService: PatientService,
    private router: Router
  ) {}
 
  ngOnInit(): void {
    this.userId = this.getUserId();
    if (!this.userId) {
      this.router.navigate(['/login']);
      return;
    }
    this.loadPatientData();
  }
 
  loadPatientData(): void {
    this.loading = true;
    this.patientService.getPatientProfile(this.userId!).subscribe(
      (patientProfile: any) => {
        this.patientName = patientProfile.name;
        this.loading = false;
        // Fetch additional data if needed (appointments, notifications)
        this.loadAppointments();
        this.loadNotifications();
      },
      (error) => {
        console.error('Error fetching patient profile:', error);
        this.loading = false;
        // Handle error (e.g., show error message)
      }
    );
  }
 
  loadAppointments(): void {
    //   this.patientService.getPatientAppointments(this.userId!).subscribe(
    //     (appointments: Appointment[]) => {
    //       this.upcomingAppointments = appointments;
    //     },
    //     (error) => {
    //       console.error('Error fetching appointments:', error);
    //       // Handle error
    //     }
    //   );
  }
 
  loadNotifications(): void {
    //   this.patientService.getPatientNotifications(this.userId!).subscribe(
    //     (notifications: Notification[]) => {
    //       this.notifications = notifications;
    //     },
    //     (error) => {
    //       console.error('Error fetching notifications:', error);
    //       // Handle error
    //     }
    //   );
  }
 
  getUserId(): number | null {
    const userId = localStorage.getItem('userId');
    return userId ? Number(userId) : null;
  }
 
  goToProfile(): void {
    this.router.navigate(['/patient/profile']);
  }
 
  goToAppointments(): void {
    this.router.navigate(['/patient/appointments']);
  }
 
  goToScheduleAppointment(): void {
    this.router.navigate(['/patient/schedule']);
  }
 
  goToMedicalHistory(): void {
    this.router.navigate(['/patient/history']);
  }
}
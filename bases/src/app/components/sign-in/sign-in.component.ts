import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [LoginComponent, RouterModule, DashboardComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {}

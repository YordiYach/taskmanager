import { Component } from '@angular/core';
import { SignInComponent } from '../sign-in/sign-in.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SignInComponent, RouterModule, DashboardComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}

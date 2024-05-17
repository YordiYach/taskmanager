import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { BienvenidaComponent } from '../bienvenida/bienvenida.component';
import { TaskComponent } from '../task/task.component';
import { TasknewComponent } from '../task/tasknew/tasknew.component';
import { CommonModule } from '@angular/common'; // Import CommonModule here
import { TaskService } from '../task/task.service.';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, ProgressBarComponent, BienvenidaComponent, TaskComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

@NgModule({
  declarations: [HeaderComponent, TaskComponent, TasknewComponent],
  imports: [BrowserModule, FormsModule, CommonModule], // Include CommonModule here
  providers: [TaskService],
  bootstrap: [],
})

export class DashboardComponent { }

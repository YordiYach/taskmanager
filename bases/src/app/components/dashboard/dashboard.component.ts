import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { BienvenidaComponent } from '../bienvenida/bienvenida.component';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, ProgressBarComponent, BienvenidaComponent, TaskComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent { }

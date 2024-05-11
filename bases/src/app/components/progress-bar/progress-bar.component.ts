import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css',
})
export class ProgressBarComponent {
  string_1: string = 'width:';
  number_1: number = 70;
  porcentaje: string = this.string_1 + this.number_1 + '%';
}

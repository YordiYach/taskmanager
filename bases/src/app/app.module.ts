import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { TaskComponent } from './components/task/task.component';
import { TasknewComponent } from './components/task/tasknew/tasknew.component';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; // Import CommonModule here
import { TaskService } from './components/task/task.service.ts';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LoginComponent, TaskComponent, TasknewComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CommonModule ], // Include CommonModule here
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}

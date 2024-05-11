import { Component ,OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TasknewComponent } from './tasknew/tasknew.component';
import { TaskService } from './task.service.ts';
import { CommonModule } from '@angular/common';
@Component({
 
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
    standalone: true,
    imports: [CommonModule],
})

export class TaskComponent  implements OnInit{
  tasks: any[] = [
  ];

  constructor(private _matDialog:MatDialog,
  private taskService:TaskService
  ){}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks(); // Use service methods
  }
addTask() : void{
    this._matDialog.open(TasknewComponent,{
      width: '800px', // Adjust as needed
    }).afterClosed().subscribe((newTask: any) => {
      if (newTask) {
      this.taskService.addTaskService(newTask);
      this. ngOnInit();
      }
    });
  }

  openTaskDetails(task: any) {
    this._matDialog.open(TasknewComponent, {
      width: '800px', // Adjust as needed
      data: task // Pass the selected task data
    }).afterClosed().subscribe((updatedTask: any) => {
      if (updatedTask) {
      this.taskService.updateTask(updatedTask);
      this. ngOnInit();
      }
    });}

    deleteTask(task: any) {
      console.log(task.id);
    this.taskService.deleteTask(task.id);
    this. ngOnInit();
    }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // O proporciona a nivel de componente si es necesario
})
export class TaskService {
  private tasks: any[] = [];

  constructor() {
    const tasksFromStorage = localStorage.getItem('tasks'); // Usar localStorage directamente
    this.tasks = tasksFromStorage ? JSON.parse(tasksFromStorage) : [];
  }

  getTasks(): any[] {
    return this.tasks;
  }

  addTaskService(newTask: any): void {
    const lastId = this.tasks.length > 0 ? Math.max(...this.tasks.map(task => task.id)) + 1 : 1;
    newTask.id = lastId;
    this.tasks.push(newTask);
    this.saveTasksToLocalStorage();
  }

  updateTask(updatedTask: any): void {
    const taskIndex = this.tasks.findIndex((task) => task.id === updatedTask.id);
    if (taskIndex !== -1) {
      this.tasks[taskIndex] = updatedTask;
      this.saveTasksToLocalStorage();
    }
  }

  deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasksToLocalStorage();
  }

  private saveTasksToLocalStorage(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks)); // Usar localStorage directamente
  }
}

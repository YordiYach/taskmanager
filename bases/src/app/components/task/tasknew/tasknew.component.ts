import { Component,Inject,OnInit  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-tasknew',
  templateUrl: './tasknew.component.html',
  styleUrl: './tasknew.component.css',
  standalone: true,
  imports: [FormsModule]
})
export class TasknewComponent implements OnInit{
  taskData: any = {
    titulo: "",
    tarea: "",
    descripcion: "",
    id: 0
  };
  constructor(public matDialogRef: MatDialogRef <TasknewComponent>, @Inject(MAT_DIALOG_DATA) public data: any){}



  ngOnInit(): void {
    if (!this.data) {
      // Si data es undefined, utiliza los valores predeterminados en taskData
      this.taskData = {
        titulo: "",
        tarea: "",
        descripcion: "",
        id: 0
      };
    } else {
      // Si data está definido, utiliza los valores proporcionados en taskData
      this.taskData = {
        titulo: this.data.titulo || "",
        tarea: this.data.tarea || "",
        descripcion: this.data.descripcion || "",
        id: this.data.id || 0
      };
    }
  }

  onSubmit() {
  this.matDialogRef.close(this.taskData);
  }
}

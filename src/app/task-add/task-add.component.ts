import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { TaskService, } from '../task.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css'
})
export class TaskAddComponent {
  taskForm: FormGroup ;

  constructor(private fb: FormBuilder,private taskService:TaskService, private router:Router) {

    this.taskForm = this.fb.group({
      Title: ['', [Validators.required]],
      description: [''],
      dueDate: [''],
      priority: ['',[Validators.required]],
    })


  }
  onSubmit(){
    let task =this.taskForm.value;
    this.taskService.AddTask(task).subscribe((data) =>{
      this.router.navigate(["/"])
    })


  }
  cancel(){
    this.taskForm.reset();
  }
}

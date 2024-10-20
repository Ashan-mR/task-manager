import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  createTask(task: any) {
    throw new Error('Method not implemented.');
  }

  constructor(
    private http: HttpClient ) {   }

    Gettask(){
      return this.http.get<any[]>('http://localhost:5135/api/TaskItems')
    }
    AddTask(task:any){
      return this.http.post('https://localhost:7185/api/TaskItems', task)
    }

}

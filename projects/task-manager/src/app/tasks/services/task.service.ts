import { Injectable } from '@angular/core';
import { Task } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  listAllTasks(): Task[]{
    const tasks = localStorage['tasks'];
    return tasks ? JSON.parse(tasks) : [];
  }

  createTask(task: Task): void {
    const tasks = this.listAllTasks();

    task.id = new Date().getTime();
    tasks.push(task);
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  findById(id: number): Task{
    return this.listAllTasks().find(t => t.id === id)
  }

  
}

import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from 'src/app/shared';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.listAll();
  }

  listAll(): Task[]{
    return this.taskService.listAllTasks();
  }

}

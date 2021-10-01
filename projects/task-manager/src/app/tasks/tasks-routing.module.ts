import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';

export const TasksRoutes: Routes = [
  {
    path: 'tasks',
    redirectTo: 'tasks/list'

  },
  {
    path: 'tasks/list',
    component: ListComponent

  }



];
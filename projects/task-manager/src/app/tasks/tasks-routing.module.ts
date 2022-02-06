import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component'

export const TasksRoutes: Routes = [
  {
    path: 'tasks',
    redirectTo: 'tasks/list'

  },
  {
    path: 'tasks/list',
    component: ListComponent

  },
  {
    path: 'tasks/create',
    component: CreateComponent

  }



];
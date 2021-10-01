import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksRoutes } from './tasks';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks/list',
    pathMatch: 'full'

  },
  ...TasksRoutes



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

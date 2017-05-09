import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from './teacher.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  {
    path: 'teacher',
    component: TeacherComponent
  },
  {
    path: 'teacher/dashboard',
    component: DashboardComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [TeacherComponent,DashboardComponent]
})
export class TeacherModule { }

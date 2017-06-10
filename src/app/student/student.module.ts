import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "app/student/login/login.component";
import { DashboardComponent } from "app/student/dashboard/dashboard.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent,DashboardComponent]
})
export class StudentModule { }

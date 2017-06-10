import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from './teacher.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { TestCreateComponent } from "app/test/test-create/test-create.component";
import { HomeComponent } from './dashboard/home/home.component';
import { FooterComponent } from './dashboard/footer/footer.component';

const appRoutes: Routes = [

];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  providers: [AngularFireAuth],
  declarations: [TeacherComponent,DashboardComponent, SigninComponent, LoginComponent, SidenavComponent, NavbarComponent, HomeComponent, FooterComponent]
})
export class TeacherModule { }

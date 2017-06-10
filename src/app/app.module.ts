import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { Routes, RouterModule } from '@angular/router';
import { TeacherModule } from './teacher/teacher.module';
import { TestModule } from './test/test.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent as TeacherDashboardComponent } from "app/teacher/dashboard/dashboard.component";
import { HomeComponent } from "app/teacher/dashboard/home/home.component";
import { TestCreateComponent } from "./test/test-create/test-create.component";
import { TestListComponent } from "app/test/test-list/test-list.component";
import { DashboardComponent as StudentDashboardComponent } from './student/dashboard/dashboard.component';
import { LoginComponent as StudentLoginComponent } from './student/login/login.component';
import { StudentModule } from "app/student/student.module";


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { 
    path: 'teacher', 
    children : [{
      path: '',
      redirectTo: '/teacher/dashboard',
      pathMatch: 'full'
    },{
      path: 'dashboard',
      component: TeacherDashboardComponent,
      children: [{
        path: '',
        component: HomeComponent,
        outlet: 'tdashboard'
      },{
        path: 'create-test',
        component: TestCreateComponent,
        outlet: 'tdashboard'
      },{
        path: 'test-list',
        component: TestListComponent,
        outlet: 'tdashboard'
      }]
    }]
  },
  { 
    path: 'student', 
    children : [{
      path: '',
      redirectTo: '/student/dashboard',
      pathMatch: 'full'
    },{
      path: 'dashboard',
      component: StudentDashboardComponent,
      children: [{
        path: '',
        component: HomeComponent,
        outlet: 'sdashboard'
      },{
        path: 'create-test',
        component: TestCreateComponent,
        outlet: 'sdashboard'
      },{
        path: 'test-list',
        component: TestListComponent,
        outlet: 'sdashboard'
      }]
    }]
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TeacherModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    TestModule,
    ChartsModule,
    StudentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

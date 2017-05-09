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

import { AppComponent } from './app.component';
import { TestListComponent } from './test/test-list/test-list.component';
import { TestDetailComponent } from './test/test-detail/test-detail.component';

const appRoutes: Routes = [
      {
        path: 'tests',
        component: TestListComponent,
        children: [
          {
            path: ':id',
            component: TestDetailComponent
          }
        ]
      }
    
];

@NgModule({
  declarations: [
    AppComponent,
    TestListComponent,
    TestDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TeacherModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes),
    AngularFireDatabaseModule,
    AngularFireAuthModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';

import { TestListComponent } from './test-list/test-list.component';
import { TestDetailComponent } from './test-detail/test-detail.component';
import { TestCreateComponent } from './test-create/test-create.component';

const appRoutes: Routes=[
  {
    path:'tests',
    component: TestListComponent
  },
  {
    path:'tests/create',
    component: TestCreateComponent
  }, 
  {
    path:'tests/:id',
    component: TestDetailComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    ReactiveFormsModule
  ],
  declarations: [TestListComponent,TestDetailComponent, TestCreateComponent]
})
export class TestModule { }

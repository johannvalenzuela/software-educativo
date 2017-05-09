import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../../environments/environment';

import { TestListComponent } from './test-list/test-list.component';
import { TestDetailComponent } from './test-detail/test-detail.component';
import { TestCreateComponent } from './test-create/test-create.component';

const appRoutes: Routes=[
  {
    path:'',
    component: TestListComponent
  },{
    path:'test/:id',
    component: TestDetailComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [TestListComponent,TestDetailComponent, TestCreateComponent]
})
export class TestModule { }

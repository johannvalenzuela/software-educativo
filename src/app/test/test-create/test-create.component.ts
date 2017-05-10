import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Test } from '../test';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test-create',
  templateUrl: './test-create.component.html',
  styleUrls: ['./test-create.component.css']
})
export class TestCreateComponent implements OnInit {
  items: FirebaseListObservable<any>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('/tests');
  }

  ngOnInit() {
  }

  addTest( newTest:Test){
    this.items.push(newTest);
  }
  deleteTest(key: string) {    
    this.items.remove(key); 
  }

}

export class TestDetailComponent {
  testForm: FormGroup; // <--- heroForm is of type FormGroup

  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }

  createForm() {
    this.testForm = this.fb.group({
      title: '',
      teacher_key: '',
      create_date: ''
    });
  }
}
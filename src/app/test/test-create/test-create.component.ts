import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Test } from '../test';
import { FormBuilder, FormGroup, FormControl,FormArray } from '@angular/forms';
import { Question } from '../question';
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-test-create',
  templateUrl: './test-create.component.html',
  styleUrls: ['./test-create.component.css']
})
export class TestCreateComponent implements OnInit {
  items: FirebaseListObservable<any>;
  test:FormGroup;
  user: Observable<firebase.User>;

  constructor(private db: AngularFireDatabase, private fb: FormBuilder,public afAuth: AngularFireAuth) {
    this.items = db.list('/tests');
    this.user = afAuth.authState;
  }

  ngOnInit() {
    this.test = this.fb.group({
      title: [''],
      teacher_key: [''],
      create_date: [''],
      description: [''],
      questions: this.fb.array([
        this.initQuestion()
      ])
    });
    //this.test.controls['teacher_key'].setValue(this.afAuth.auth.currentUser.uid);
  }

  initQuestion(){
    return this.fb.group({
          title: [''],
          correct: [''],
          answers: this.fb.array([
            this.initAnswer()
          ])
        });
  }

  initAnswer(){
    return this.fb.group({
          text: ['']
        });
  }
  addQuestion(){
        var control = <FormArray>this.test.controls['questions'];
        control.push(this.initQuestion());
  }

  addAnswer(index: number){
        var controlAns = <FormArray>this.test.controls['questions'];
        var control2 = <FormArray> controlAns.controls[index];
        var control3 = <FormArray>control2.controls['answers'];
        control3.push(this.initAnswer());
  }

  addTest(){
    this.items.push(this.test.value);
  }

}
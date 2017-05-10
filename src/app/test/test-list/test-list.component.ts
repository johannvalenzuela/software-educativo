import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {

  tests: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.tests = db.list('/tests');
    console.log(this.tests)
  }

  ngOnInit() {
  }

  deleteTest(key: string) {    
    this.tests.remove(key); 
  }
}

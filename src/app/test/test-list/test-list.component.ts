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
    console.log(this.tests);
    let presenceRef = db.database.ref("disconnectmessage");
    presenceRef.onDisconnect().set("I disconnected!");

    let connectedRef = db.database.ref(".info/connected");
//    connectedRef.on("value", function(snap) {
//      if (snap.val() === true) {
//        alert("connected");
//      } else {
//        alert("not connected");
//      }
//    });

  }

  ngOnInit() {
  }

  deleteTest(key: string) {    
    this.tests.remove(key); 
  }
}

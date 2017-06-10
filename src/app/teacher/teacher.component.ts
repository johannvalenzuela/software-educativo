import { Component, OnInit } from '@angular/core';
import {AngularFireAuth } from 'angularfire2/auth';
import { Observable } from "rxjs/Observable";
// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  user: Observable<firebase.User>;
  mensaje: string;
  teachers: FirebaseListObservable<any>;
  constructor(public afAuth: AngularFireAuth, public r:Router, public db: AngularFireDatabase) {
    this.user = afAuth.authState;
    this.teachers = db.list('/teachers');
    afAuth.authState.subscribe(function(user) {
      if (user) {
        this.mensaje = "Logeado";
        console.log(this.mensaje);
        db.database.ref("/teachers/"+afAuth.auth.currentUser.uid).set(afAuth.auth.currentUser.toJSON());

      }else{
        this.mensaje = "No está logeado";
        console.log(this.mensaje);
        r.navigate(['/']);
      }
    });
  }

  ngOnInit() {
  }

}

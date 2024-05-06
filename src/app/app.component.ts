import { Component, OnInit } from '@angular/core';

import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'course-project';

  studentsRef!: AngularFireList<any>;
  studentRef!: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.studentsRef = this.db.list('test');
    console.log(this.studentsRef)
  }
}

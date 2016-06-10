import { Component } from '@angular/core';
import { TodosComponent } from './todos/todos.component';
import { FirebaseAuth } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'ng2todo-app',
  templateUrl: 'ng2todo.component.html',
  styleUrls: ['ng2todo.component.css'],
  directives: [TodosComponent]
})
export class Ng2todoAppComponent {
  title = 'ng2todo list';

  constructor (private _auth: FirebaseAuth) {
    this._auth.login();
  }
}

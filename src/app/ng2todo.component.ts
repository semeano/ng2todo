import { Component, trigger, state, transition, style, animate } from '@angular/core';
import { TodosComponent } from './todos/todos.component';
import { FirebaseAuth } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'ng2todo-app',
  templateUrl: 'ng2todo.component.html',
  styleUrls: ['ng2todo.component.css'],
  directives: [TodosComponent],
  animations: [
    trigger('flyIn', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(1000)
      ])
    ])
  ]
})
export class Ng2todoAppComponent {
  title = 'ng2todo list';

  constructor (private _auth: FirebaseAuth) {
    this._auth.login();
  }
}

import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'app-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css'],
  directives: [MD_LIST_DIRECTIVES, MD_INPUT_DIRECTIVES, MdIcon],
  providers: [MdIconRegistry]
})
export class TodosComponent implements OnInit {
  
  todos: FirebaseListObservable<any[]>;
  newTodo: string = '';

  constructor(private af: AngularFire) {}

  ngOnInit() {
    this.todos = this.af.database.list('/');
  }
  
  add() {
    this.todos.push(this.newTodo);
    this.newTodo = '';
  }

  delete(todo) {
    this.todos.remove(todo);
  }

}

import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css']
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

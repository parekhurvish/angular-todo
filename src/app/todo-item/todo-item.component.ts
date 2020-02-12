import { TodoServiceService } from './../todo-service.service';
import { Todo } from './../Todo';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoServiceService) { }

  ngOnInit() {
  }

  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes;
  }

  onToggle(todo) {
    todo.completed = !todo.completed;
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo);
    })
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }

}

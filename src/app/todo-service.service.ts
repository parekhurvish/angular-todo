import { Todo } from './Todo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
 headers:new HttpHeaders({
   'type':'application/json'
 })
}

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  
  todosUrl: string = "https://jsonplaceholder.typicode.com/todos";
  limitTodos: string = "?_limit=5"

  constructor(private http: HttpClient) { }

  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.limitTodos}`);
  }

  toggleCompleted(todo: Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  deleteTodo(todo: Todo):Observable<any>{
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete(url, httpOptions);
  }

  addTodo(todo: Todo):Observable<Todo>{
    //const url = `${this.todosUrl}/${todo.id}`;
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }
}

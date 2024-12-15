import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Todo {
  id: number,
  title: string,
  description: string,
  priority: string,
  createDate: string
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  todos = new BehaviorSubject<Todo[]>([]);

  public getTodos() : Observable<Todo[]> {
    return this.http.get("http://localhost:5000/todos");
  }
}

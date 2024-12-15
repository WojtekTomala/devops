import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo, TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'todolist';
  todos: [] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe({
      next: (resData: Todo[]) => {
        console.log(resData);
      }
    })
  }
}

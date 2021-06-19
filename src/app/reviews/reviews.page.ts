import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../services/todo.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService
      .getTodos()
      .subscribe(res => {
        this.todos = res;
      });
  }

  remove(item: Todo): void {
    this.todoService
      .removeTodo(item.id);
  }

}

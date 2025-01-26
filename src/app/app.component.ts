import { Component } from '@angular/core';
import { Todo } from './Todo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  // title = 'to-do-list';
  todos: Todo[] = [
    { task: 'Buy Grocery', completed: false, duration: 1 },
    { task: 'Laundry', completed: true, duration: 2 },
    { task: 'Walk the dog', completed: true, duration: 0.45 },
    { task: 'Call Mom', completed: false, duration: 1 },
    { task: 'relax', completed: false, duration: 1.5 },
  ];

  onComplete(index: number): void {
    this.todos[index].completed = true;
  }

  onDelete(index: number): void {
    this.todos.splice(index, 1);
  }
}

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
    { task: 'Buy Grocery', completed: false, duration: 1, priority: 'Normal' },
    { task: 'Laundry', completed: true, duration: 2, priority: 'Low' },
    { task: 'Walk the dog', completed: true, duration: 0.45, priority: 'High' },
    { task: 'Call Mom', completed: false, duration: 1, priority: 'High' },
    { task: 'relax', completed: false, duration: 2.0, priority: 'Normal' },
    {
      task: 'watching movie',
      completed: false,
      duration: 1.5,
      priority: 'Low',
    },
  ];

  onComplete(index: number): void {
    this.todos[index].completed = true;
  }

  onDelete(index: number): void {
    this.todos.splice(index, 1);
  }
}

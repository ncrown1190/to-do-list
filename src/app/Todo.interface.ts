export interface Todo {
  task: string;
  completed: boolean;
  duration: number;
  priority: 'Low' | 'Normal' | 'High';
}

import { Component } from '@angular/core';

@Component({
  selector: 'todo-list-item',
  standalone: true,
  imports: [],
  template: `
  <!-- dynamic-data -->
      <li>(Title) {{taskTitle}}</li>
  `,
  styles: `
        li {
          color: red;
          font-weight: 300;
        }
  `,
})
export class TodoListItemComponent {

  taskTitle = 'Read cup of coffee';
  isComplete = false;


  updateTitle(newTitle: string) {
    this.taskTitle = newTitle;
  }

  completeTask() {
    this.isComplete = true;
  }

}

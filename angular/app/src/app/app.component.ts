import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './components/Todo/todo/todo.component';

@Component({
  selector: 'app-root',
  // html element selector for this component
  standalone: true,
  // want to use a component inside another componet: import it 
  // and include it in the components imports list
  imports: [RouterOutlet, TodoComponent],
  template: `

    <app-todo></app-todo>
    `,
  styleUrl: './app.component.css'
})
export class AppComponent {

  /*componest behavior and logic is defined here */

  
  title = 'app';
}

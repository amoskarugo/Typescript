import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './components/Todo/todo/todo.component';
import { UserProfileComponent } from './components/User-profile/user-profile/user-profile.component';
import { OutputsComponent } from './components/custom-events/outputs/outputs.component';
@Component({
  selector: 'app-root',
  // html element selector for this component
  standalone: true,
  // want to use a component inside another componet: import it 
  // and include it in the components imports list
  imports: [RouterOutlet, TodoComponent, UserProfileComponent, OutputsComponent],
  template: `

    <!-- <app-todo></app-todo> -->

    <app-outputs/>
    `,
  styleUrl: './app.component.css'
})
export class AppComponent {

  /*componest behavior and logic is defined here */

  
  title = 'app';
}

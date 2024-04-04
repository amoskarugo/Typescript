import { Component, inject } from '@angular/core';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { CalculatorService } from '../../../services/calculator.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodoListItemComponent],
  template: `
    <ul>
      <todo-list-item></todo-list-item>
    </ul>


     
    <!-- dynamic properties -->
    <button type="submit" [disabled]="formIsValid">Submit</button>


    <!-- conditionals and loops -->
    <!-- conditional rendering -->
    <!-- if and else block -->

    @if (isAdmin) {
      <button>Erase database</button>
    } @else {
      <p>Your not authorized</p>
    }


    <ul>
      <!-- for loop block -->
      @for (ingredient of ingredientList; track ingredient.name) {
          <!-- for...of rendering repeated elements -->
        <li>{{ingredient.name}} - {{ingredient.quantity}}</li>
      }
    </ul>


    
      <!-- dynamic-attributes -->
    <button [attr.data-test-id]="testId">Primary CTA</button>


    <!-- enent-handling -->

    <p>{{announcement}}</p>
    <button (click)="transformText()">Abracadabra!</button>

    <p>Tatal amount: {{total}}</p>
    <button (click)="calculateTotal()">calculate</button>


    
  `,
  styles: `

  ul {
    list-style-type: none;
  }
  
  `,
})
export class TodoComponent {

  formIsValid = true;
  isAdmin = true;
  testId = 'main-cta';


  announcement = 'Hello again angular!'

 
  ingredientList = [
    {name: 'noodles', quantity: 1},
    {name: 'miso broth', quantity: 1},
    {name: 'egg', quantity: 2},
  ];


  private calculatorService = inject(CalculatorService);

  total = 0;

  transformText(){
    this.announcement = this.announcement.toUpperCase();
  }

  calculateTotal(){

    this.total = this.calculatorService.add(50, 70);
  }
}

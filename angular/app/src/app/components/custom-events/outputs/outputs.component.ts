import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-outputs',
  standalone: true,
  imports: [ChildComponent],
  template: `
    <app-child
      [all]="all"
 
      [inStock]="inStock"
  
      [outOfStock]="outOfStock"
      (selectedFilterRadioButtonChanged)="onChange($event)"
    />
  `,
  styleUrl: './outputs.component.css',
})
export class OutputsComponent {
  all: number = 11;

  inStock: number = 6;

  outOfStock: number = 5;


  onChange(value: string){
    console.log("event raised: ", value)
  }
}

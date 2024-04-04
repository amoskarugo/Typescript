import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="filter-container">
      <span>Filter: </span>

      <input
        type="radio"
        name="filter"
        value="all"
        [(ngModel)]="selectedFilterRadioButton"
        (change)="onSelectedFilterRadioButtonChanged()"
      />
      <span>{{ 'All (' + all + ')' }}</span>

      <input
        type="radio"
        name="filter"
        value="true"
        [(ngModel)]="selectedFilterRadioButton"
        (change)="onSelectedFilterRadioButtonChanged()"
      />
      <span>{{ 'in stock (' + inStock + ')' }}</span>

      <input
        type="radio"
        name="filter"
        value="false"
        [(ngModel)]="selectedFilterRadioButton"
        (change)="onSelectedFilterRadioButtonChanged()"
      />
      <span>{{ 'out of stock (' + outOfStock + ')' }}</span>
    </div>
  `,
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input()
  all: number = 0;

  @Input()
  inStock: number = 0;

  @Input()
  outOfStock: number = 0;

  @Output()
  selectedFilterRadioButtonChanged: EventEmitter<string> =
    new EventEmitter<string>();

  selectedFilterRadioButton: string = 'all';

  onSelectedFilterRadioButtonChanged() {
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
  }
}

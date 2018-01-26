import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list-tag',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Ciasto', 500),
    new Ingredient('Salami', 20)
  ];

  constructor() {}

}

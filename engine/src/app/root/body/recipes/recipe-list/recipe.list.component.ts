import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list-tag',
  templateUrl: './recipe.list.component.html',
  styleUrls: ['./recipe.list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('dummy', 'This is dummy recipe', 'https://www.zajadam.pl/wp-content/uploads/2009/09/pizza-21.jpg')
  ];
}

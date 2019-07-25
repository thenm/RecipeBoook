import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeServices } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeServices]
})
export class RecipesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  selectedRecipe: Recipe;
  recipeSelected(recipe) {
    console.log('recipe component', recipe);
  }
}

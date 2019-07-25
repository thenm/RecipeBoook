import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeServices } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeClickedEvent = new EventEmitter();
  recipes: Recipe[];

  constructor(private recipeService: RecipeServices) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  recipeClicked(recipe) {
    this.recipeClickedEvent.emit(recipe);
  }
}

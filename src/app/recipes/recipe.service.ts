import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://c1.staticflickr.com/9/8492/28755393040_c3b4c4853d_b.jpg'),
    new Recipe('Another Test Recipe', 'This is another a test', 'https://c1.staticflickr.com/9/8492/28755393040_c3b4c4853d_b.jpg'),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addRecipe() {

  }

  removeRecipe() {

  }
}

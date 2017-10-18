import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Hot Dogs',
      'This is classic favorite at barbecues!',
      'https://c1.staticflickr.com/9/8492/28755393040_c3b4c4853d_b.jpg',
      [
        new Ingredient('Buns', 4),
        new Ingredient('Weiners', 4)
      ]),
    new Recipe('Apple Pie',
      'Luscious and juicy pie filled with apples. It is so very delitchous',
      'https://c1.staticflickr.com/9/8492/28755393040_c3b4c4853d_b.jpg',
      [
        new Ingredient('Apples', 5),
        new Ingredient('Pie Crust', 1)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addRecipe() {

  }

  removeRecipe() {

  }
}

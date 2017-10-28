import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();


  private recipes: Recipe[] = [
    new Recipe(
      'Hot Dogs',
      'This is classic favorite at barbecues!',
      'http://blogs.mcgill.ca/oss/files/2013/04/hot-dog.jpg',
      [
        new Ingredient('Buns', 4),
        new Ingredient('Weiners', 4)
      ]),
    new Recipe('Apple Pie',
      'Luscious and juicy pie filled with apples. It is so very delitchous',
      'https://upload.wikimedia.org/wikipedia/commons/a/af/Steven%27s_Apple_Pie.jpg',
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

  getRecipeByIndex(index: number): Recipe {
    return this.recipes[index];
  }
}

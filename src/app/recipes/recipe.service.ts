import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Hot Dogs',
      'This is classic favorite at barbecues!',
      'http://www.publicdomainpictures.net/pictures/130000/velka/hotdog-mustard-only.jpg',
      [
        new Ingredient('Buns', 4),
        new Ingredient('Weiners', 4)
      ]),
    new Recipe('Apple Pie',
      'Luscious and juicy pie filled with apples.',
      'https://upload.wikimedia.org/wikipedia/commons/a/af/Steven%27s_Apple_Pie.jpg',
      [
        new Ingredient('Apples', 5),
        new Ingredient('Pie Crust', 1)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addRecipe(recipe: Recipe) {
    this.setDefaultImg(recipe);
    this.recipes.push(recipe);
    this.emitRecipesChange();
  }

  updateRecipe(index: number, updatedRecipe: Recipe) {
    this.recipes[index] = updatedRecipe;
    this.emitRecipesChange();
  }

  removeRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.emitRecipesChange();
  }

  getRecipeByIndex(index: number): Recipe {
    return this.recipes[index];
  }

  private setDefaultImg(recipe: Recipe) {
    if (recipe.imagePath === '' || recipe.imagePath === 'Default' ) {
      recipe.imagePath = 'http://lorempixel.com/200/200/food'
    }
  }

  private emitRecipesChange() {
    this.recipesChanged.next(this.recipes.slice());
  }
}

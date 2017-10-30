import { Subject } from 'rxjs/Subject';
import { Ingredient } from './ingredient.model';

export class ShoppingListService {
  ingredientsUpdated = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Tomatillos', 10),
    new Ingredient('Hot Sauce', 1)
   ];

   getList() {
     return this.ingredients.slice();
   }

   addItem(ingredient: Ingredient) {
     this.ingredients.push(ingredient);
     this.ingredientsUpdated.next(this.ingredients.slice());
   }

   removeItem() {

   }

   addRecipeIngredients(recipeIngredients: Ingredient[]) {
     this.ingredients = this.ingredients.concat(recipeIngredients);
   }
}

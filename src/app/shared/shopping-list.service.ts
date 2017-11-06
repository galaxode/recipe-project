import { Subject } from 'rxjs/Subject';
import { Ingredient } from './ingredient.model';

export class ShoppingListService {
  ingredientsUpdated = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

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

   getItem(index: number) {
     return this.ingredients[index];
   }

   updateItem(index: number, ingredient: Ingredient) {
     this.ingredients[index] = ingredient;
     this.ingredientsUpdated.next(this.ingredients.slice());
   }

   removeItem(index: number) {
     this.ingredients.splice(index, 1);
     this.ingredientsUpdated.next(this.ingredients.slice());
   }

   addRecipeIngredients(recipeIngredients: Ingredient[]) {
     this.ingredients = this.ingredients.concat(recipeIngredients);
   }
}

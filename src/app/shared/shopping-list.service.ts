export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Tomatillos', 10),
    new Ingredient('Hot Sauce', 1)
   ];

   getList() {
     return this.ingredients.slice();
   }

   addItem() {

   }

   removeItem() {

   }
}

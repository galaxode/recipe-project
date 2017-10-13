import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isRecipes: boolean = true; // recipe tab is default
  isShoppingList: boolean = false;

  onNavClicked(navId: string) {
    if (navId === 'recipes-nav') {
      this.isRecipes = true;
      this.isShoppingList = false;
    }
    if (navId === 'shopping-list-nav') {
      this.isRecipes = false;
      this.isShoppingList = true;
    }
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shared/shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getList();
    this.subscription = this.shoppingListService.ingredientsUpdated
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = this.shoppingListService.getList();
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

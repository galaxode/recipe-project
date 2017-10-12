import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://c1.staticflickr.com/9/8492/28755393040_c3b4c4853d_b.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://c1.staticflickr.com/9/8492/28755393040_c3b4c4853d_b.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}

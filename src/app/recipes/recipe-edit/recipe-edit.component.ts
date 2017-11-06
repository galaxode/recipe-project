import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { Ingredient } from '../../shared/ingredient.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  ingredients: Ingredient[] = [];
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  initForm() {
    let name = '';
    let imagePath = '';
    let description = '';

    if (this.editMode) {
      const recipe = this.recipeService.getRecipeByIndex(this.id);
      name = recipe.name;
      imagePath = recipe.imagePath;
      description = recipe.description;
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'imagePath': new FormControl(imagePath),
      'description': new FormControl(description),
      'ingredients': new FormArray([])
    });
  }

  onAddIngredient() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.recipeForm.get('ingredients')).push(control);
  }

}

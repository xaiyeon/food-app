import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router/src/shared';
import { FormGroup, FormControl } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { FormArray } from '@angular/forms';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  // checking if we are editing or not
  editMode= false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService ) { }

  // Good place to retrieve the ID
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        // should call here for form
        this.initForm();
      }
    );
  }

  // for editing recipe
  private initForm() {
    let recipeName = '';
    let recipeURL = '';
    let recipeDesc = '';
    // Now for ingredients
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipeID(this.id);
      recipeName = recipe.name;
      recipeURL = recipe.imageURL;
      recipeDesc = recipe.description;
      // check if we have ingredients
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients){
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name),
            'amount': new FormControl(ingredient.amount)
          }));
        }
      }

    }
    // THE names here must match the names on the HTML code
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeURL),
      'description': new FormControl(recipeURL),
      'ingredients': recipeIngredients
    });
  }

  onSubmitForm() {
    console.log(this.recipeForm);
  }

}

import { Component, OnInit, Input, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router/src/shared';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;

  // Need to retrieve the id now
  constructor(private recipeService: RecipeService,
  private route: ActivatedRoute ) { }

  ngOnInit() {
    // only on single use
    //const id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipeID(this.id);
      } );

  }

  onAddShoppingList() {
    this.recipeService.addIngredientsShoppingList(this.recipe.ingredients);
  }

}

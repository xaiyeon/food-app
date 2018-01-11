import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Output, Input, EventEmitter } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //@Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];

  // We get current route and such
  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
  }

/*   onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  } */

  OnNewRecipe() {
    // to target a path we want to go to
    this.router.navigate(['new'], {relativeTo: this.route});
  }


}

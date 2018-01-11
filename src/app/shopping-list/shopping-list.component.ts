import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];

  // unsbuscribe manually
  private subscription: Subscription;


  constructor(private slService: ShoppingListService) { }

  ngOnInit() {

    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );

  }

  ngOnDestroy() {
    // prevent memory leaks
    this.subscription.unsubscribe();
  }

/*   onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  } */

  // related to forms, now we can use in edit
  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

}

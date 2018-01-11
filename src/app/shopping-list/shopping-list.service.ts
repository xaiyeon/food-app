import { Ingredient } from '../shared/models/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    // insteaed of eventemitter use subject
    ingredientsChanged = new Subject<Ingredient[]>();

    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Flour Noodles', 100),
        new Ingredient('Beef', 20),
        new Ingredient('Onion', 10)
      ];

      getIngredients() {
          return this.ingredients.slice();
      }

    addIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredientsShopping(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //     this.addIngredients(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());

    }

}






import { Ingredient } from '../shared/models/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

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
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredientsShopping(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //     this.addIngredients(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());

    }

}






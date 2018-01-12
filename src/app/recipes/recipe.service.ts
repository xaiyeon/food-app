import { EventEmitter, Inject, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    //recipeSelected = new EventEmitter<Recipe>();
    
    constructor(private slService: ShoppingListService) {}

    private recipes: Recipe[] = [
        new Recipe('Beef Stew', 'A stew with beef',
        'http://2.bp.blogspot.com/_UIXOn06Pz70/SQeVhB80pHI/AAAAAAAAEwM/7VOPo6q5Ago/s800/Nikujaga+500.jpg', [
            new Ingredient('Beef', 10)
        ] ),
        new Recipe('Ramen', 'A Japanese noodle soup.',
      'https://japancentre-images.freetls.fastly.net/page_elements/image1s/926/original/tokyo_ramen.jpg?1469627012', [
          new Ingredient('Noodle', 100)
      ]),
      new Recipe('Fried Chicken', 'Chicken that is deep fried to a golden crisp. A favorite of African Americans.',
      'http://static3.businessinsider.com/image/56be399e2e526558008b7091/a-food-scientist-explains-how-to-make-the-crispiest-fried-chicken-in-the-world.jpg'
      , [
          new Ingredient('Chicken', 2)
      ]),
      new Recipe('Lumpia', 'A rolled delicacy from the Philipines that pack a taste of culture.',
      'http://newyork.seriouseats.com/images/2012/04/20120419-202554-Mama-Meena%27s-lumpia-shanghai.jpg'
      , [
          new Ingredient('Flour', 1)
      ]),
      new Recipe('Lasagna', 'An Italian specialty that is like smashed spaghetti.', 'https://atmedia.imgix.net/2832f13af92f5bcf3ef860796044d2355e770c03?w=800&fit=max',
        [ new Ingredient('Tomato', 5), new Ingredient('Pasta', 50) 
    ]) 
    
      ];


    getRecipe() {
        return this.recipes.slice();
    }

    getRecipeID(id: number) {
        // don't need slice()
        return this.recipes[id];
    }


    addIngredientsShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredientsShopping(ingredients);
    }

}


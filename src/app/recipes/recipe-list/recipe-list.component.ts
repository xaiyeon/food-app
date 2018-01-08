import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();


  recipes: Recipe[] = [
    new Recipe('Beef Stew', 'A stew with beef',
    'http://2.bp.blogspot.com/_UIXOn06Pz70/SQeVhB80pHI/AAAAAAAAEwM/7VOPo6q5Ago/s800/Nikujaga+500.jpg' ),
    new Recipe('Ramen', 'A Japanese noodle soup.',
  'https://japancentre-images.freetls.fastly.net/page_elements/image1s/926/original/tokyo_ramen.jpg?1469627012'),
  new Recipe('Fried Chicken', 'Chicken that is deep fried to a golden crisp. A favorite of African Americans.',
  'http://static3.businessinsider.com/image/56be399e2e526558008b7091/a-food-scientist-explains-how-to-make-the-crispiest-fried-chicken-in-the-world.jpg'),
  new Recipe('Lumpia', 'A rolled delicacy from the Philipines that pack a taste of culture.',
  'http://newyork.seriouseats.com/images/2012/04/20120419-202554-Mama-Meena%27s-lumpia-shanghai.jpg')

  ];


  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}

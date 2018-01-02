import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Beef Stew', 'A stew with beef',
    'http://2.bp.blogspot.com/_UIXOn06Pz70/SQeVhB80pHI/AAAAAAAAEwM/7VOPo6q5Ago/s800/Nikujaga+500.jpg' ),
    new Recipe('Ramen', 'A Japanese noodle soup.',
  'https://japancentre-images.freetls.fastly.net/page_elements/image1s/926/original/tokyo_ramen.jpg?1469627012')

  ];


  constructor() { }

  ngOnInit() {
  }

}

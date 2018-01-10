import { Component, OnInit, Input, Output, ElementRef, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/models/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  //@Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private slServce: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const itName = this.nameInputRef.nativeElement.value;
    const itAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(itName, itAmount);
    this.slServce.addIngredients(newIngredient);
    
    //this.ingredientAdded.emit(newIngredient);
  }

}

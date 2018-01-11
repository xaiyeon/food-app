import { Component, OnInit, Input, Output, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/models/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;
  //@Output() ingredientAdded = new EventEmitter<Ingredient>();

  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;

  constructor(private slServce: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slServce.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;

        }
    );
  }

  
  onAddItem(form: NgForm) {
    // const itName = this.nameInputRef.nativeElement.value;
    // const itAmount = this.amountInputRef.nativeElement.value;
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.slServce.addIngredients(newIngredient);
    
    //this.ingredientAdded.emit(newIngredient);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

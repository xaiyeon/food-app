import { Component, OnInit, Input, Output, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/models/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
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

  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private slServce: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slServce.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slServce.getIngredient(index);
        this.slForm.setValue( {
          name: this.editedItem.name,
          amount: this.editedItem.amount
        } );
        }
    );
  }

  
  onFormSubmit(form: NgForm) {
    // const itName = this.nameInputRef.nativeElement.value;
    // const itAmount = this.amountInputRef.nativeElement.value;
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    // To update or add
    if (this.editMode) {
      this.slServce.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.slServce.addIngredients(newIngredient);
    }
    form.reset();
    this.editMode = false;
    
    //this.ingredientAdded.emit(newIngredient);
  }

  // Clear form
  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  // Delete an item
  onDeleteItem() {
    this.slServce.deleteIngredients(this.editedItemIndex);
    this.onClear();

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

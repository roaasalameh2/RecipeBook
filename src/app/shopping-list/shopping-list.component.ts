import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.module";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent implements OnInit{
  Ingredients:Ingredient[] = [
    new Ingredient('Appels',5),
    new Ingredient('Tomatoes',5)
  ];

  constructor() {
  }
  ngOnInit() {
  }
  onIngredientAdd(ingredient:Ingredient){
  this.Ingredients.push(ingredient);
  }
}

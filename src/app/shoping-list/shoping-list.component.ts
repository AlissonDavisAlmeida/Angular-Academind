import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css'],
})
export class ShopingListComponent implements OnInit {
  ingredientes:Ingredient[] = [

  ];

  constructor(private shoppingService : ShoppingListService) {

  }

  ngOnInit(): void {
    this.ingredientes = this.shoppingService.getIngredientes();
  }
}

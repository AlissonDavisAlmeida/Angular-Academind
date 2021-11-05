import { Component } from '@angular/core';

import { Ingredient } from '../shared/Ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css'],
})
export class ShopingListComponent {
  ingredientes:Ingredient[] = [

  ];

  saveIngredient(event) {
    if (event.nome !== '' && event.quantidade !== undefined) {
      this.ingredientes.push(event);
    }
  }
}

import {
  Component, ElementRef, ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nomeInput', { static: true }) nome : ElementRef;

  @ViewChild('quantidadeInput', { static: true }) quantidade : ElementRef;

  constructor(private shoppingService : ShoppingListService) {

  }

  saveIngredient() {
    console.log(this.nome, this.quantidade);
    this.shoppingService.adicionarIngrediente(new Ingredient(
      this.nome.nativeElement.value, this.quantidade.nativeElement.value,
    ));
  }
}

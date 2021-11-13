/* eslint-disable no-plusplus */
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from '../shoping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class ReceitasService {
  private receitas: Recipe[] = [
    new Recipe('Pão', 'Francês', 'https://www.alegrafoods.com.br/wp-content/uploads/2021/06/02-receita-rapida-de-batata-recheada-com-bacon.jpg', [
      new Ingredient('Farinha', 1),
      new Ingredient('Fermento', 0.5),

    ]),
    new Recipe('Bolo', 'Gelado Chocolate', 'https://conteudo.imguol.com.br/c/entretenimento/c8/2021/07/13/bolo-cremoso-de-chocolate-1626185315609_v2_3x4.jpg', [
      new Ingredient('Fermento', 0.5),
      new Ingredient('Ovos', 0.5),
      new Ingredient('Margarian', 0.5),
    ]),
  ];

  receitaSelecionada = new EventEmitter<Recipe>();

  constructor(private ListaService : ShoppingListService) { }

  getReceitas() {
    return this.receitas.slice();
  }

  addIngredientesListaCompras(ingredientes : Ingredient[]) {
    for (let index = 0; index < ingredientes.length; index++) {
      this.ListaService.adicionarIngrediente(ingredientes[index]);
    }
  }
}

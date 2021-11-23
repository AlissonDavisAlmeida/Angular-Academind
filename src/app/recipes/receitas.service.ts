/* eslint-disable no-plusplus */
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/Ingredient.model";
import { ShoppingListService } from "../shoping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class ReceitasService {
  private receitas: Recipe[] = [
    new Recipe("Pão", "Francês", "https://imagensemoldes.com.br/wp-content/uploads/2020/06/Foto-P%C3%A3o-PNG-1280x720.png", [
      new Ingredient("Farinha", 1),
      new Ingredient("Fermento", 0.5),

    ]),
    new Recipe("Bolo", "Gelado Chocolate", "https://lh3.googleusercontent.com/proxy/tZ8wR3vFthjb6zuPhKXRDQrDtpAfUPrmDyFPj2jljxuzadzirV_x_N-N0qf8rHTuflT1ebVBvi9BEnF434tJh4dvdPSvwQ1w29PRpq7H5MExDuCVjbL-Pcst8tNZY_QNI48Dqu_vTxgAoXzDlvrlnBoNos5iz8LigA", [
      new Ingredient("Fermento", 0.5),
      new Ingredient("Ovos", 0.5),
      new Ingredient("Margarian", 0.5),
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

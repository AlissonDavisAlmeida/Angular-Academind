/* eslint-disable no-plusplus */
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/Ingredient.model";
import { ShoppingListService } from "../shoping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class ReceitasService {
  recipeChanged = new Subject<Recipe[]>();

  private receitas: Recipe[] = [
    /* new Recipe("Pão", "Francês", "https://imagensemoldes.com.br/wp-content/uploads/2020/06/Foto-P%C3%A3o-PNG-1280x720.png", [
      new Ingredient("Farinha", 1),
      new Ingredient("Fermento", 0.5),

    ]),
    new Recipe("Bolo", "Gelado Chocolate",
      "https://bolodefestasp.com.br/wp-content/uploads/2020/12/WhatsApp_Image_2020-12-20_at_19.54.55-removebg-preview.png",
      [
        new Ingredient("Fermento", 0.5),
        new Ingredient("Ovos", 0.5),
        new Ingredient("Margarian", 0.5),
      ]), */
  ];

  constructor(private ListaService : ShoppingListService) { }

  getReceitas() {
    return this.receitas.slice();
  }

  addReceitas(recipe : Recipe) {
    const existe = this.receitas.find((receitaN) => receitaN.nome === recipe.nome);
    if (!existe) {
      this.receitas.push(recipe);
      this.recipeChanged.next(this.receitas.slice());
      console.log("Receita adicionada com sucesso");
    }
  }

  atualizarReceita(index : number, newRecipe : Recipe) {
    console.log(newRecipe);
    this.receitas[index] = newRecipe;
  }

  addIngredientesListaCompras(ingredientes : Ingredient[]) {
    for (let index = 0; index < ingredientes.length; index++) {
      this.ListaService.adicionarIngrediente(ingredientes[index]);
    }
  }

  deleteRecipe(index : number) {
    this.receitas.splice(index, 1);
    this.recipeChanged.next(this.receitas);
  }
}

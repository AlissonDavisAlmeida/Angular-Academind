import { Subject } from "rxjs";
import { Ingredient } from "../shared/Ingredient.model";

export class ShoppingListService {
  startedEditing = new Subject<number>();

  private ingredientes:Ingredient[] = [

  ];

  constructor() { }

  getIngredientes() {
    return this.ingredientes;
  }

  getIngredient(index : number) {
    return this.ingredientes[index];
  }

  updateIngredient(index : number, ingredient : Ingredient) {
    console.log(ingredient);
    this.ingredientes.splice(index, 1, ingredient);
  }

  deleteItem(index : number) {
    this.ingredientes.splice(index, 1);
  }

  adicionarIngrediente(ingrediente : Ingredient) {
    this.ingredientes.push(ingrediente);
  }
}

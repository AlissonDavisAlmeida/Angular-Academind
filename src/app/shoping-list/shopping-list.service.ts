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

  adicionarIngrediente(ingrediente : Ingredient) {
    this.ingredientes.push(ingrediente);
  }
}

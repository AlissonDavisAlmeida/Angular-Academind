import { Ingredient } from '../shared/Ingredient.model';

export class ShoppingListService {
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

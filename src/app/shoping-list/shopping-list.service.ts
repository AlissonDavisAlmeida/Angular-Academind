import { Ingredient } from '../shared/Ingredient.model';

export class ShoppingListService {
  private ingredientes:Ingredient[] = [
    new Ingredient('Pão', 10),
  ];

  constructor() { }

  getIngredientes() {
    return this.ingredientes;
  }

  adicionarIngrediente(ingrediente : Ingredient) {
    this.ingredientes.push(ingrediente);
  }
}

import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class ReceitasService {
  private receitas: Recipe[] = [
    new Recipe('Pão', 'Farinha de Trigo', 'https://www.alegrafoods.com.br/wp-content/uploads/2021/06/02-receita-rapida-de-batata-recheada-com-bacon.jpg'),
    new Recipe('Bolo', 'Ovos', 'https://www.alegrafoods.com.br/wp-content/uploads/2021/06/02-receita-rapida-de-batata-recheada-com-bacon.jpg'),
  ];

  receitaSelecionada = new EventEmitter<Recipe>();

  constructor() { }

  getReceitas() {
    return this.receitas.slice();
  }
}

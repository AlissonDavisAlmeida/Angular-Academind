import { Component, Input } from '@angular/core';

import { ReceitasService } from '../receitas.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css'],
})
export class RecipesDetailsComponent {
  @Input()receita : Recipe;

  constructor(private recipesService : ReceitasService) {

  }

  IrParaListadeCompras() {
    this.recipesService.addIngredientesListaCompras(this.receita.ingredientes);
  }
}

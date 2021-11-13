import { Component, OnInit } from '@angular/core';
import { ReceitasService } from './receitas.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [ReceitasService],
})
export class RecipesComponent implements OnInit {
  constructor(private receitaService : ReceitasService) { }

  receita : Recipe;

  ngOnInit(): void {
    this.receitaService.receitaSelecionada.subscribe((receita) => {
      this.receita = receita;
    });
  }
}

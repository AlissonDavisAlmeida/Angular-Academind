import { Component, Input, OnInit } from '@angular/core';
import { ReceitasService } from '../../receitas.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  constructor(private receitasService : ReceitasService) { }

  @Input()receita : Recipe;

  @Input()indice : number;

  ngOnInit(): void {
  }
}

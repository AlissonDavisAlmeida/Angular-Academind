import {
  Component, OnInit,
} from '@angular/core';
import { ReceitasService } from '../receitas.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  receitas: Recipe[];

  constructor(private receitasService : ReceitasService) {}

  ngOnInit(): void {
    this.receitas = this.receitasService.getReceitas();
  }
}

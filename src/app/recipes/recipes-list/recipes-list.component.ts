import {
  Component, EventEmitter, OnInit, Output,
} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  receitas: Recipe[] = [
    new Recipe('Pão', 'Farinha de Trigo', 'https://www.alegrafoods.com.br/wp-content/uploads/2021/06/02-receita-rapida-de-batata-recheada-com-bacon.jpg'),
    new Recipe('Bolo', 'Ovos', 'https://www.alegrafoods.com.br/wp-content/uploads/2021/06/02-receita-rapida-de-batata-recheada-com-bacon.jpg'),
  ];

  @Output() emiteReceita = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {

  }

  exibeDetalhe(receita: Recipe) {
    this.emiteReceita.emit(receita);
  }
}

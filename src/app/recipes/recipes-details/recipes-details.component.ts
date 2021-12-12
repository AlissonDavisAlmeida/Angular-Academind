import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";

import { ReceitasService } from "../receitas.service";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipes-details",
  templateUrl: "./recipes-details.component.html",
  styleUrls: ["./recipes-details.component.css"],
})
export class RecipesDetailsComponent implements OnInit {
  receita : Recipe;

  indice : number;

  constructor(private recipesService : ReceitasService, private activeRoute : ActivatedRoute,
    private router : Router) {

  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params :Params) => {
      this.indice = params.indice;
      this.receita = this.recipesService.getReceitas()[this.indice];
    });
  }

  IrParaListadeCompras() {
    this.recipesService.addIngredientesListaCompras(this.receita.ingredientes);
  }

  irParaEdicao() {
    this.router.navigate(["../../", "editar", this.indice], { relativeTo: this.activeRoute });
  }

  apagarReceita() {
    this.recipesService.deleteRecipe(this.indice);
    this.router.navigate([""]);
  }
}

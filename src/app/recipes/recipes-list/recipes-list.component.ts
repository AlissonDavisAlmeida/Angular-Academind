import {
  Component, OnInit,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ReceitasService } from "../receitas.service";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"],
})
export class RecipesListComponent implements OnInit {
  receitas: Recipe[];

  constructor(private receitasService : ReceitasService, private router : Router,
    private route : ActivatedRoute) {}

  ngOnInit(): void {
    this.receitas = this.receitasService.getReceitas();
    this.receitasService.recipeChanged.subscribe((valor : Recipe[]) => {
      this.receitas = valor;
    });
  }

  novaReceita() {
    this.router.navigate(["nova"], { relativeTo: this.route });
  }
}

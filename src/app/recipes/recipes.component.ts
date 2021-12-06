import { Component, OnInit } from "@angular/core";
import { ReceitasService } from "./receitas.service";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
  providers: [ReceitasService],
})
export class RecipesComponent implements OnInit {
  constructor(private receitaService : ReceitasService) { }

  ngOnInit(): void {

  }
}

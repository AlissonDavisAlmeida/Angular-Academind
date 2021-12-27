import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { ReceitasService } from "../recipes/receitas.service";
import { Recipe } from "../recipes/recipe.model";

@Injectable({
  providedIn: "root",
})
export class DataStorageService {
  receitas : Recipe[] = [];

  constructor(private http : HttpClient, private servicoReceita : ReceitasService) {
  /*   this.http.get("https://projeto-pet-10dcb-default-rtdb.firebaseio.com/receitas.json").subscribe((dados) => {
      console.log(dados);
      const newDados = Object.values(dados);

      newDados.forEach((receita) => {
        this.servicoReceita.addReceitas(receita);
      });
    }); */
  }

  salvarReceitas() {
    this.receitas = this.servicoReceita.getReceitas();
    this.http.put("https://projeto-pet-10dcb-default-rtdb.firebaseio.com/receitas.json", this.receitas).subscribe((retorno) => {
      console.log(retorno);
    });
  }

  carregarReceitas() {
    this.http.get<Recipe[]>("https://projeto-pet-10dcb-default-rtdb.firebaseio.com/receitas.json")
      .pipe(map((receitas) => receitas.map((receita) => ({
        ...receita,
        ingredientes: receita.ingredientes ? receita.ingredientes : [],
      }))))
      .subscribe((dados) => {
        console.log(dados);
        const newDados = Object.values(dados);

        newDados.forEach((receita) => {
          this.servicoReceita.addReceitas(receita);
        });
      });
  }
}

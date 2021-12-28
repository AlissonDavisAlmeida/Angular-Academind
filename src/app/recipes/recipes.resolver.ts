import { Injectable } from "@angular/core";
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { DataStorageService } from "../shared/data-storage.service";
import { ReceitasService } from "./receitas.service";
import { Recipe } from "./recipe.model";

@Injectable({
  providedIn: "root",
})
export class RecipesResolver implements Resolve<Recipe[]> {
  constructor(private dataStorage : DataStorageService, private receitaService : ReceitasService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe[]> {
    const receitas = this.receitaService.getReceitas();
    if (receitas.length === 0) {
      return this.dataStorage.carregarReceitas();
    }
    return null;
  }
}

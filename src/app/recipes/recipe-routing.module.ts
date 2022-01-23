import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { RecipesDetailsComponent } from "./recipes-details/recipes-details.component";
import { RecipesEditComponent } from "./recipes-edit/recipes-edit.component";
import { RecipesStartComponent } from "./recipes-start/recipes-start.component";
import { RecipesComponent } from "./recipes.component";
import { RecipesResolver } from "./recipes.resolver";

const rotas : Routes = [
  {
    path: "",
    component: RecipesComponent,
    children: [
      { path: "", component: RecipesStartComponent },
      { path: "nova", component: RecipesEditComponent },
      { path: "detalhe/:indice", component: RecipesDetailsComponent, resolve: [RecipesResolver] },

      { path: "editar/:id", component: RecipesEditComponent, resolve: [RecipesResolver] },
    ],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(rotas)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {

}

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";
import { RecipesDetailsComponent } from "./recipes/recipes-details/recipes-details.component";
import { RecipesEditComponent } from "./recipes/recipes-edit/recipes-edit.component";
import { RecipesStartComponent } from "./recipes/recipes-start/recipes-start.component";

import { RecipesComponent } from "./recipes/recipes.component";
import { RecipesResolver } from "./recipes/recipes.resolver";
import { ShopingListComponent } from "./shoping-list/shoping-list.component";

const routes: Routes = [

  { path: "", redirectTo: "/auth", pathMatch: "full" },
  {
    path: "receitas",
    component: RecipesComponent,
    children: [
      { path: "", component: RecipesStartComponent },
      { path: "nova", component: RecipesEditComponent },
      { path: "detalhe/:indice", component: RecipesDetailsComponent, resolve: [RecipesResolver] },

      { path: "editar/:id", component: RecipesEditComponent, resolve: [RecipesResolver] },
    ],
    canActivate: [AuthGuard],
  },
  { path: "shopping", component: ShopingListComponent, canActivate: [AuthGuard] },
  { path: "auth", component: AuthComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }

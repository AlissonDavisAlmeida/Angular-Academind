import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";

const routes: Routes = [

  { path: "", redirectTo: "/auth", pathMatch: "full" },
  { path: "receitas", loadChildren: () => import("./recipes/recipes.module").then((m) => m.RecipesModule) },
  { path: "shopping", loadChildren: () => import("./shoping-list/shopping.module").then((m) => m.ShoppingModule) },
  { path: "auth", component: AuthComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }

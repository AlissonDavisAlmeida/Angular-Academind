import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { RecipesComponent } from "./recipes.component";
import { RecipesListComponent } from "./recipes-list/recipes-list.component";
import { RecipesDetailsComponent } from "./recipes-details/recipes-details.component";
import { RecipeItemComponent } from "./recipes-list/recipe-item/recipe-item.component";
import { RecipesStartComponent } from "./recipes-start/recipes-start.component";
import { RecipesEditComponent } from "./recipes-edit/recipes-edit.component";
import { RecipesRoutingModule } from "./recipe-routing.module";

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailsComponent,
    RecipeItemComponent,
    RecipesStartComponent,
    RecipesEditComponent,

  ],
  imports: [

    FormsModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
  ],

})
export class RecipesModule { }

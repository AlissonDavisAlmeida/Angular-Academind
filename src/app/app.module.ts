import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipesListComponent } from "./recipes/recipes-list/recipes-list.component";
import { RecipesDetailsComponent } from "./recipes/recipes-details/recipes-details.component";
import { RecipeItemComponent } from "./recipes/recipes-list/recipe-item/recipe-item.component";
import { ShopingListComponent } from "./shoping-list/shoping-list.component";
import { ShoppingEditComponent } from "./shoping-list/shopping-list-edit/shopping-edit.component";
import { DropdownDirective } from "./shared/dropdown.directive";
import { ShoppingListService } from "./shoping-list/shopping-list.service";
import { RecipesStartComponent } from "./recipes/recipes-start/recipes-start.component";
import { RecipesEditComponent } from "./recipes/recipes-edit/recipes-edit.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailsComponent,
    RecipeItemComponent,
    ShopingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipesStartComponent,
    RecipesEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule { }

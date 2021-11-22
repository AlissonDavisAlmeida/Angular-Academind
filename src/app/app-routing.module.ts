import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';

import { RecipesComponent } from './recipes/recipes.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';

const routes: Routes = [

  { path: '', redirectTo: '/receitas', pathMatch: 'full' },
  {
    path: 'receitas',
    component: RecipesComponent,
    children: [
      { path: 'receitas/detalhe/:indice', component: RecipesDetailsComponent },
    ],
  },
  { path: 'shopping', component: ShopingListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }

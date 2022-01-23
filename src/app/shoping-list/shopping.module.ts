import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ShopingListComponent } from "./shoping-list.component";
import { ShoppingEditComponent } from "./shopping-list-edit/shopping-edit.component";
import { AuthGuard } from "../auth/auth.guard";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    ShopingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: "", component: ShopingListComponent, canActivate: [AuthGuard] },
    ]),
  ],

})
export class ShoppingModule { }

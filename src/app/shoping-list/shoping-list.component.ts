import {
  Component, OnChanges, OnDestroy, OnInit, SimpleChanges,
} from "@angular/core";
import { Router } from "@angular/router";

import { Ingredient } from "../shared/Ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: "app-shoping-list",
  templateUrl: "./shoping-list.component.html",
  styleUrls: ["./shoping-list.component.css"],
})
export class ShopingListComponent implements OnInit {
  ingredientes:Ingredient[] = [

  ];

  isShowing = true;

  constructor(private shoppingService : ShoppingListService, private router : Router) {

  }

  ngOnInit(): void {
    this.ingredientes = this.shoppingService.getIngredientes();
    this.isShowing = true;
  }

  onEditItem(index : number): void {
    this.shoppingService.startedEditing.next(index);
    console.log(index);
  }
}

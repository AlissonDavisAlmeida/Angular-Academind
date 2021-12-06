import {
  Component, OnDestroy, OnInit,
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { Ingredient } from "src/app/shared/Ingredient.model";
/* import { Ingredient } from "src/app/shared/Ingredient.model"; */
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription = new Subscription();

  editItemIndex : number;

  editMode = false;

  constructor(private shoppingService : ShoppingListService) {

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.shoppingService.startedEditing.subscribe((valor) => {
      this.editItemIndex = valor;
      this.editMode = true;
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  saveIngredient(myForm : NgForm) {
    console.log(myForm);
    this.shoppingService.adicionarIngrediente(
      new Ingredient(myForm.form.value.name, myForm.form.value.number),
    );
    /* this.shoppingService.adicionarIngrediente(new Ingredient(
      this.nome.nativeElement.value, this.quantidade.nativeElement.value,
    )); */
  }
}

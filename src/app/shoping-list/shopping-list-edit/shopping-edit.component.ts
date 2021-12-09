import {
  Component, OnDestroy, OnInit, ViewChild,
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
  @ViewChild("myForm", { static: false }) myForm : NgForm;

  subscription :Subscription;

  editedItem : Ingredient;

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
      this.editedItem = this.shoppingService.getIngredient(this.editItemIndex);
      this.myForm.setValue({
        name: this.editedItem.nome,
        number: this.editedItem.quantidade,
      });
    });
  }

  onClear() {
    this.editMode = false;
    this.myForm.reset();
  }

  removeItem() {
    this.shoppingService.deleteItem(this.editItemIndex);
    this.onClear();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  saveIngredient(myForm : NgForm) {
    if (this.editMode) {
      this.editedItem.nome = myForm.form.value.name;
      this.editedItem.quantidade = myForm.form.value.number;
      this.shoppingService.updateIngredient(this.editItemIndex, this.editedItem);
    } else {
      this.shoppingService.adicionarIngrediente(
        new Ingredient(myForm.form.value.name, myForm.form.value.number),
      );
    }
    this.onClear();
    /* this.shoppingService.adicionarIngrediente(new Ingredient(
      this.nome.nativeElement.value, this.quantidade.nativeElement.value,
    )); */
  }
}

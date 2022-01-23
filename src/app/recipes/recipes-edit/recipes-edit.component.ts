import { Component, OnInit } from "@angular/core";
import {
  FormArray, FormControl, FormGroup, Validators,
} from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { ReceitasService } from "../receitas.service";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipes-edit",
  templateUrl: "./recipes-edit.component.html",
  styleUrls: ["./recipes-edit.component.css"],
})
export class RecipesEditComponent implements OnInit {
  id : number ;

  myForm : FormGroup;

  editMode : boolean = false;

  constructor(private route : ActivatedRoute, private recipeService : ReceitasService, private rota : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params : Params) => {
      if (params.id !== undefined) {
        this.id = +params.id;
        this.editMode = true;
      }
    });
    this.initForm();
  }

  onSubmit() {
    console.log(this.myForm.value.ingredients);
    const newRecipe = new Recipe(this.myForm.value.name, this.myForm.value.description,
      this.myForm.value.imagePath, this.myForm.value.ingredients);
    if (this.editMode) {
      this.recipeService.atualizarReceita(this.id, newRecipe);
    } else {
      this.recipeService.addReceitas(newRecipe);
    }
    this.rota.navigate(["/receitas"]);
  }

  cancelar() {
    this.rota.navigate([""]);
  }

  private initForm() {
    let recipeName = "";
    let imageURL = "";
    let description = "";
    const recipeIngredients = new FormArray([]);
    if (this.editMode) {
      const recipe = this.recipeService.getReceitas()[this.id];
      imageURL = recipe.imageUrl;
      recipeName = recipe.nome;
      description = recipe.descricao;
      if (recipe.ingredientes) {
        for (const ingredient of recipe.ingredientes) {
          recipeIngredients.push(
            new FormGroup({
              nome: new FormControl(ingredient.nome, Validators.required),
              quantidade: new FormControl(ingredient.quantidade, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
            }),
          );
        }
      }
    }

    this.myForm = new FormGroup({
      name: new FormControl(recipeName, [Validators.required]),
      imagePath: new FormControl(imageURL, Validators.required),
      description: new FormControl(description, Validators.required),
      ingredients: recipeIngredients,
    });
  }

  get controls() {
    return (<FormArray> this.myForm.get("ingredients")).controls;
  }

  adicionarIngredient() {
    (<FormArray> this.myForm.get("ingredients")).push(
      new FormGroup({
        nome: new FormControl("", Validators.required),
        quantidade: new FormControl("", [Validators.required, Validators.pattern(/^[1.0-9.0]+[0-9]*$/)]),
      }),
    );
  }

  removeIngredient(index : number) {
    (<FormArray> this.myForm.get("ingredients")).removeAt(index);
    // this.recipeService.getReceitas()[this.id].ingredientes.splice(index, 1);
  }
}

import { Component, OnInit } from "@angular/core";
import {
  FormArray, FormControl, FormGroup, Validators,
} from "@angular/forms";
import { ActivatedRoute, Params } from "@angular/router";
import { ReceitasService } from "../receitas.service";

@Component({
  selector: "app-recipes-edit",
  templateUrl: "./recipes-edit.component.html",
  styleUrls: ["./recipes-edit.component.css"],
})
export class RecipesEditComponent implements OnInit {
  id : number ;

  myForm : FormGroup;

  editMode : boolean = false;

  constructor(private route : ActivatedRoute, private recipeService : ReceitasService) { }

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
              name: new FormControl(ingredient.nome, Validators.required),
              amount: new FormControl(ingredient.quantidade, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
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
        name: new FormControl("", Validators.required),
        amount: new FormControl("", [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      }),
    );
  }
}

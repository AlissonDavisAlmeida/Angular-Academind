import { Ingredient } from "../shared/Ingredient.model";

export class Recipe {
  public nome : string;

  public descricao : string;

  public ingredientes : Ingredient[];

  public imageUrl : string;

  constructor(nome:string, descricao:string, imageUrl:string, ingredientes : Ingredient[]) {
    this.nome = nome;
    this.descricao = descricao;
    this.imageUrl = imageUrl;
    this.ingredientes = ingredientes;
  }
}

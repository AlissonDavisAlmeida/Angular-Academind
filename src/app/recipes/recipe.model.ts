export class Recipe {
  public nome : string;

  public descricao : string;

  public imageUrl : string;

  constructor(nome:string, descricao:string, imageUrl:string) {
    this.nome = nome;
    this.descricao = descricao;
    this.imageUrl = imageUrl;
  }
}

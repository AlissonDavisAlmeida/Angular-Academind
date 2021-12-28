import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ReceitasService } from "../recipes/receitas.service";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
  selector: "app-header",
  styleUrls: ["header.component.css"],
  templateUrl: "header.component.html",
})

export class HeaderComponent {
  constructor(private dataStore : DataStorageService, private http : HttpClient, private servicoReceita : ReceitasService) {

  }

  salvarReceitas() {
    this.dataStore.salvarReceitas();
  }

  carregarReceitas() {
    this.dataStore.carregarReceitas()
      .subscribe((dados) => console.log(dados));
  }
}

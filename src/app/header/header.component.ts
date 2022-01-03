import { HttpClient } from "@angular/common/http";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { ReceitasService } from "../recipes/receitas.service";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
  selector: "app-header",
  styleUrls: ["header.component.css"],
  templateUrl: "header.component.html",
})

export class HeaderComponent implements OnInit, OnDestroy {
  private autenticado = false;

  private authSubscription : Subscription;

  constructor(private dataStore : DataStorageService, private http : HttpClient, private servicoReceita : ReceitasService,
    private authService : AuthService) {

  }

  public getAutenticado() {
    return this.autenticado;
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.authSubscription = this.authService.usuarioEmmit.subscribe((usuario) => {
      console.log(usuario);
      this.autenticado = !!usuario;
      console.log(this.autenticado);
    });
  }

  salvarReceitas() {
    this.dataStore.salvarReceitas();
  }

  carregarReceitas() {
    this.dataStore.carregarReceitas()
      .subscribe((dados) => console.log(dados));
  }
}

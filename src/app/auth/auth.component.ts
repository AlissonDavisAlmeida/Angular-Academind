import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService, AuthServiceResponseData } from "./auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;

  error:string = null;

  isLoading = false;

  constructor(private authService : AuthService, private rota : Router) { }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  ngOnInit(): void {

  }

  onSubmit(myForm : NgForm) {
    this.isLoading = true;

    if (!myForm.valid) {
      return;
    }

    let authObs : Observable<AuthServiceResponseData>;

    if (!this.isLoginMode) {
      authObs = this.authService.signup(myForm.value.email, myForm.value.senha);
    } else {
      authObs = this.authService.login(myForm.value.email, myForm.value.senha);
    }

    authObs.subscribe((retorno) => {
      console.log(retorno);
      this.isLoading = false;
      this.error = null;
      this.rota.navigate(["/receitas"]);
    }, ((error) => {
      this.error = error;
      this.isLoading = false;
    }));

    myForm.reset();
  }
}

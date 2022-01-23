import {
  Component, ComponentFactory, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild,
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { AuthService, AuthServiceResponseData } from "./auth.service";
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceholderDirective } from "../shared/placeholder/placeholder.directive";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoginMode = true;

  private closeAlert : Subscription;

  error:string = null;

  @ViewChild(PlaceholderDirective, { static: false }) context : PlaceholderDirective;

  isLoading = false;

  constructor(private authService : AuthService, private rota : Router, private componentFactory : ComponentFactoryResolver) { }

  ngOnDestroy(): void {
    if (this.closeAlert !== undefined) {
      this.closeAlert.unsubscribe();
    }
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  ngOnInit(): void {

  }

  public showErrorAlert(error : string) {
    const alertCmpFactory = this.componentFactory.resolveComponentFactory(AlertComponent);
    const view = this.context.viewContainerRef;
    view.clear();
    const alertComponent = view.createComponent(alertCmpFactory);

    alertComponent.instance.mensagem = error;
    this.closeAlert = alertComponent.instance.fecharModal.subscribe((va) => {
      view.clear();
    });
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
      this.showErrorAlert(error);
      this.isLoading = false;
    }));

    myForm.reset();
  }
}

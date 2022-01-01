import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;

  error:string = null;

  isLoading = false;

  constructor(private authService : AuthService) { }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  ngOnInit(): void {
  }

  onSubmit(myForm : NgForm) {
    this.isLoading = true;
    console.log(myForm.value);
    if (!myForm.valid) {
      return;
    }
    if (!this.isLoginMode) {
      this.authService.signup(myForm.value.email, myForm.value.senha).subscribe((retorno) => {
        console.log(retorno);
        this.isLoading = false;
      }, ((error) => {
        this.error = error;
        this.isLoading = false;
      }));
    }

    myForm.reset();
  }
}

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

  constructor(private authService : AuthService) { }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  ngOnInit(): void {
  }

  onSubmit(myForm : NgForm) {
    console.log(myForm.value);
    if (!myForm.valid) {
      return;
    }
    if (!this.isLoginMode) {
      this.authService.signup(myForm.value.email, myForm.value.senha).subscribe((retorno) => {
        console.log(retorno);
      }, ((error) => {
        console.log(error.error.error.message);
      }));
    }
    myForm.reset();
  }
}

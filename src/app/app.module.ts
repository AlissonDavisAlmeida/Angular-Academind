import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";

import { AuthComponent } from "./auth/auth.component";
import { LoadingSpinnersComponent } from "./shared/loading-spinners/loading-spinners.component";

/* import { AlertComponent } from "./shared/alert/alert.component"; */
import { PlaceholderDirective } from "./shared/placeholder/placeholder.directive";

import { CoreModule } from "./core.module";
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BrowserModule,

    AuthComponent,
    LoadingSpinnersComponent,
    /* AlertComponent, */
    PlaceholderDirective,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,

    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    StoreModule.forRoot({}, {}),
  ],

  bootstrap: [AppComponent],
})
export class AppModule { }

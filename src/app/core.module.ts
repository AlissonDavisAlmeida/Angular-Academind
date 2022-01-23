import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptor } from "./auth/auth.interceptor";
import { ReceitasService } from "./recipes/receitas.service";
import { ShoppingListService } from "./shoping-list/shopping-list.service";

@NgModule({
  providers: [
    ShoppingListService, ReceitasService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class CoreModule {}

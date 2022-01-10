import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})

export class AuthGuard implements CanActivate {
  constructor(private auth : AuthService, private rota : Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.usuarioEmmit.pipe(take(1), map((usuario) => {
      const isAuth = !!usuario;
      if (isAuth) {
        return true;
      }
      return this.rota.createUrlTree(["/auth"]);
    }));
  }
}

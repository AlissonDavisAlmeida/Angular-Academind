import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, tap } from "rxjs/operators";
import { BehaviorSubject, throwError } from "rxjs";
import { UserModel } from "./user.model";

export interface AuthServiceResponseData{
  idToken : string
  email : string
  refreshToken : string
  expiresIn : string
  localId : string
  registered?:boolean
}

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private APIKEY = "AIzaSyBu4j87xyyWPtZztRZ6--2LVhCW9h7sfKw";

  usuarioEmmit = new BehaviorSubject<UserModel>(null);

  constructor(private http : HttpClient) { }

  signup(email : string, senha : string) {
    return this.http.post<AuthServiceResponseData>(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${this.APIKEY}`, { email, password: senha, returnSecureToken: true })
      .pipe(catchError((errorRes) => {
        let error = "Ocorreu um erro";
        if (!errorRes.error || !errorRes.error.error) {
          return throwError(error);
        }
        if (errorRes.error.error.message === "EMAIL_EXISTS") {
          error = "O email não pode ser cadastrado, ele já existe na nossa base de dados";
        }
        return throwError(error);
      }), tap((res) => {
        this.handleAuth(res.email, res.localId, res.idToken, +res.expiresIn);
      }));
  }

  login(email:string, password:string) {
    return this.http.post<AuthServiceResponseData>(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${this.APIKEY}`, { email, password, returnSecureToken: true })
      .pipe(catchError((errRes) => {
        let error = "Ocorreu um erro";
        if (!errRes.error || !errRes.error.error) {
          return throwError(error);
        }
        if (errRes.error.error.message === "INVALID_PASSWORD") {
          error = "Senha ou usuário inválido";
        } else if (errRes.error.error.message === "EMAIL_NOT_FOUND") {
          error = "O email informado não existe na nossa base de dados";
        }

        return throwError(error);
      }), tap((res) => {
        this.handleAuth(res.email, res.localId, res.idToken, +res.expiresIn);
      }));
  }

  private handleAuth(email : string, userId:string, token : string, expiresIn : number) {
    const expireDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new UserModel(email, userId, token, expireDate);
    this.usuarioEmmit.next(user);
  }
}

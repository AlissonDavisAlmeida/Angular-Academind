import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

interface AuthServiceResponseData{
  idToken : string
  email : string
  refreshToken : string
  expiresIn : string
  localId : string

}

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private APIKEY = "AIzaSyBu4j87xyyWPtZztRZ6--2LVhCW9h7sfKw";

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
      }));
  }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

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
    return this.http.post<AuthServiceResponseData>(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${this.APIKEY}`, { email, password: senha, returnSecureToken: true });
  }
}

import { AppSettings } from "app/shared/AppSettings";
import { Role } from "app/shared/models/role.model";
import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { User } from './models/user.model';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class UserService implements OnInit {
  constructor(private http: Http) { }

  //Return all users from the API.
  //We probably need to implement paging.
  getAllUsers(): Observable<User[]> {
    return this.http.get(`${AppSettings.API_ENDPOINT}/users`)
      .map((response) => response.json().users
        .map((userData) => {
          return new User({ ...userData });
        })
      );
  }

  createUser(userData) {
    const { email, password } = userData;
    const newUser = { email, password };

    return this.http.post(`${AppSettings.API_ENDPOINT}/users`, newUser)
      .map((response: Response) => {
        // this is where the token will be pulled from the response
        // const token = this.getTokenFromResponse(response);
        const token = 'tempToken';
        return token;
      })
      .catch((error: Response) => {
        return Observable.throw(error);
      });
  }

  getUser() {

  }


  ngOnInit(): void {

  }

  updateUser() {

  }

  getToken() {
    return window.localStorage.vividCiphersToken;
  }

  setToken(token: string) {
    window.localStorage.vividCiphersToken = token;
  }

  private getTokenFromResponse(response: Response) {
    // method to pull token from server response
  }
}

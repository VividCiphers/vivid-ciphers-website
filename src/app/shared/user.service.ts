import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSettings } from "app/shared/AppSettings";
import 'rxjs/Rx';

@Injectable()
export class UserService {
  private users: User[] = [];

  constructor(private http: Http) { }

  getUsersFromAPI() {
    return this.http.get(`${AppSettings.API_ENDPOINT}/users`)
      .map(response => response.json())
      .map(response => response.users);
  }

  getAllUsers() {
    this.getUsersFromAPI()
      .subscribe((users) =>  {
        users.forEach((user) => {
          this.createUser(user);
        });
      });
    return this.users;
  }

  getUser() {

  }

  createUser(userData) {
    const { email, password } = userData;
    const newUser = {
      email,
      password,
    }
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

  updateUser() {

  }

  getToken() {
    return window.localStorage.coffeeTimeToken;
  }

  setToken(token: string) {
    window.localStorage.vividCiphersToken = token;
  }

  private getTokenFromResponse(response: Response) {
    // method to pull token from server response
  }
}

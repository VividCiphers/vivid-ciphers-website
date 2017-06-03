import { Injectable, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppSettings } from "app/shared/AppSettings";
import 'rxjs/Rx';
import { Role } from "app/shared/models/role.model";

@Injectable()
export class UserService implements OnInit {
  constructor(private http: Http) { }

  //Return all users from the API.  
  //We probably need to implement paging.
  getAllUsers(): Observable<User[]> {
    return this.http.get(`${AppSettings.API_ENDPOINT}/users`)
      .map(response => response.json().users
        .map((user) => {
           return new User({
            id: user.id,
            email: user.email,
            created_at: user.created_at,
            profile: user.profile,
            roles: user.roles.map((role) => { 
              return new Role({ 
                id: role.id,
                role_name: role.role_name
               })}),
            active: user.active  
          });
        }));
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

  getUser() {

  }


  ngOnInit(): void {

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

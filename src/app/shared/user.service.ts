import { Injectable, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { AppSettings } from "app/shared/AppSettings";

@Injectable()
export class UserService implements OnInit{
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

  createUser(userData: {}) {
    const newUser = new User(userData);
    this.users.push(newUser);
    return newUser;
  }

  updateUser() {

  }

  ngOnInit(): void {

  }

}

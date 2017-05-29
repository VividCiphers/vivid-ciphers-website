import { Injectable, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { AppSettings } from "app/shared/AppSettings";

@Injectable()
export class UserService implements OnInit{
  users: User[];

  constructor(private http: Http) { 

}

  getUsers() { 
    return this.http.get(`${AppSettings.API_ENDPOINT}/users`)
        .map(response => response.json())
        .map(response => response.users);
  }

  ngOnInit(): void {
    
  }

}

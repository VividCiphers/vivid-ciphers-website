import { Injectable, OnInit } from '@angular/core';
import { User } from './models/user.model';

@Injectable()
export class UserService implements OnInit{
  users: User[];

  constructor() { 
    this.users = [
      new User(1, 'test@test.com', 'ryan', 'g', '', '', '', '', '', 1)
    ]

  }

  getUsers() { 
    return this.users;
  }

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

}

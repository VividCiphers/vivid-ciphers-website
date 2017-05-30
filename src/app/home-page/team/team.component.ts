import { Component, OnInit } from '@angular/core';
import { UserService } from "app/shared/user.service";
import { User } from "app/shared/models/user.model";

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsersFromAPI()
      .subscribe((users) =>  {
        users.forEach((user) => {
          this.userService.createUser(user);
        });
      });
    this.users = this.userService.getAllUsers();
  }

}

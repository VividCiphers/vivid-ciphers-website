import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from "app/shared/user.service";
import { User } from "app/shared/models/user.model";
import { Role } from "app/shared/models/role.model";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'team-listing',
  templateUrl: './team-listing.component.html',
  styleUrls: ['./team-listing.component.css']
})
export class TeamListingComponent implements OnInit {
  @Output() loading = new EventEmitter<Boolean>();

  private users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loading.emit(true);
    this.userService.getAllUsers()
      .subscribe(
        (users: User[]) => {
          this.loading.emit(false);
          this.users = users.filter((user: User) => {
            if (user && user.profile && user.profile.image_path){ 
              return user;
            }
          })
        },
        (err) => {
          this.loading.emit(false);
          console.error(`There was a problem getting users: ${err}`);
        },
        () => { 
          console.log(this.users);
        }
      );
  }

}

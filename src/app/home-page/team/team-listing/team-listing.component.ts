import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from "app/shared/models/user.model";
import { UserService } from "app/shared/user.service";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'team-listing',
  templateUrl: './team-listing.component.html',
  styleUrls: ['./team-listing.component.css']
})
export class TeamListingComponent implements OnInit {
 @Output() loading = new EventEmitter<Boolean>();

 users: User[];
  

  constructor(private userService: UserService) { }

  ngOnInit() {
      this.loading.emit(true);
      this.userService.getAllUsers()
      .subscribe((users: User[]) => {
        this.loading.emit(false);
        this.users = users},
        (err) => { 
          console.log(err);
          this.loading.emit(false);
        },
        () => this.loading.emit(false) );
  }

}

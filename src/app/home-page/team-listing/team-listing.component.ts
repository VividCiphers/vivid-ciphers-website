import { Component, OnInit, Input } from '@angular/core';
import { User } from "app/shared/models/user.model";

@Component({
  selector: 'team-listing',
  templateUrl: './team-listing.component.html',
  styleUrls: ['./team-listing.component.css']
})
export class TeamListingComponent implements OnInit {

  @Input() users: User[];
  constructor() { }

  ngOnInit() {
  }

}

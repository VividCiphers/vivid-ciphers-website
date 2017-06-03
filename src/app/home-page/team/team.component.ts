import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  loading: Boolean = false;
  ngOnInit(): void {
  }

}
 
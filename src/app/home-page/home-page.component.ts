import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  loadingComponents = {
    team: false,
    skills: false,
    projects: false,
    newsletter: false,
    contact: false
  }


  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
  }

  
}

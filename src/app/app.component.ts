import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './shared/projects.service';
import { ActivatedRoute } from "@angular/router";
import {PageScrollConfig} from 'ng2-page-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProjectsService]
})
export class AppComponent implements OnInit  {
  
constructor(private route: ActivatedRoute) { 
  PageScrollConfig.defaultDuration = 500;

}

  ngOnInit() {
    this.route.fragment.subscribe(f => {
      let element = null;
      if (f)
        element = document.querySelector("#" + f)
      if (element) 
        element.scrollIntoView(element)
    })
  }
  

}

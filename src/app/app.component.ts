import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './shared/projects.service';
import { ActivatedRoute } from "@angular/router";
import {PageScrollConfig} from 'ng2-page-scroll';
import { NavigationHeaderComponent } from "app/shared/navigation-header/navigation-header.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProjectsService]
})
export class AppComponent implements OnInit  {
 currentTitle: string = "You dream it. We build it";
 currentTagline = "Jumpstart your next dream project with an all-star crew of developers passionate about learning and coding.";

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
  
  componentAdded($event){
    this.currentTitle = $event.route && $event.route.snapshot.data['title'] || this.currentTitle;
    this.currentTagline = $event.route && $event.route.snapshot.data['tagline'] || this.currentTagline;
  }

}

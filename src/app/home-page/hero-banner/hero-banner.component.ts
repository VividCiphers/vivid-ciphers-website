import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from "@angular/router";

@Component({
  selector: 'hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.css']
})
export class HeroBannerComponent implements OnInit {
  @Input() title = "You dream it. We build it";
  @Input() tagline = "Jumpstart your next dream project with an all-star crew of developers passionate about learning and coding.";

  constructor(private route: ActivatedRoute, private router: Router) { 
      

  }

  ngOnInit() {
  }

}

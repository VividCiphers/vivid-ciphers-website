import { Component, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'project-slide',
  templateUrl: './project-slide.component.html',
  styleUrls: ['./project-slide.component.css']
})
export class ProjectSlideComponent implements OnInit, AfterViewInit {



  slides = [{
    "id": 1,
    "pic": "vc-slide.png",
    "header": "Vivid Ciphers Website",
    "content": "We're excited to feature as our first project the Vivid Ciphers website.  This website was developer by various members of the team, at first using SASS, Vanilla Javascript, and HTML. Eventually we re-worked the project to use a laravel REST API and an angular front end.",
    "watch": "#",
    "git": "#"
  }, {
    "id": 2,
    "pic": "project-slide-2.png",
    "header": "Social Network Project",
    "content": "Our 2nd project will be a fully functional social networking site written in nodejs and react. Subscribe below for more information!",
    "watch": "#",
    "git": "#"
  }];

  currentSlide = null;

  constructor() {
  }

  ngAfterViewInit(): void {
    if (!this.currentSlide) {
      setTimeout(() => {
        this.currentSlide = this.slides[0];
      }, 700);
    }
  }

  ngOnInit() {
    this.rotateSlides();
  }

  setCurrentSlide(slide: any) {
    this.currentSlide = slide;
  }

  rotateSlides(): void {
    let slideNumber = 0;
    let delay = 5000;


    setInterval(() => {
      setTimeout(() => {
        if (this.currentSlide === this.slides[this.slides.length - 1])
          this.currentSlide = this.slides[0];
        else
          this.currentSlide = this.slides[this.slides.indexOf(this.currentSlide) + 1];

      }, 800);
    }, delay);

  }
}



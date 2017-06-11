import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'project-slide',
  templateUrl: './project-slide.component.html',
  styleUrls: ['./project-slide.component.css']
})
export class ProjectSlideComponent implements OnInit {
  
  slides = [{
    "id": 1,
    "pic": "project-slide-1.png",
    "header": "Slide 1",
    "content": "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, Ladipisicing elit, incididunt ut labore et dolore magna aliqua. Ladipisicing elit.</p><p>Lorem ipsum dolor sit amet, sed do. Ladipisicing elit.</p>",
    "watch": "#",
    "git": "#"
  }, {
    "id": 2,
    "pic": "project-slide-2.png",
    "header": "Slide 2",
    "content": "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>",
    "watch": "#",
    "git": "#"
  }, {
    "id": 3,
    "pic": "project-slide-3.png",
    "header": "Slide 3",
    "content": "<p>Lorem ipsum dolor sit amet.</p>",
    "watch": "#",
    "git": "#"
  }];

  currentSlide = this.slides[0];

  constructor() { }

  ngOnInit() {
    this.rotateSlides();
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



import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  // Eventually this will be a new instance of the user model.
  // newUser: User = new User();
  newUser = {};

  onSubmit() {
    console.log(this.newUser);
  }

  constructor() { }

  ngOnInit() {
  }

}

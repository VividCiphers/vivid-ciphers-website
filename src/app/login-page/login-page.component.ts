import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  // Eventually this will be a new instance of the user model.
  // user: User = new User();
  user = {};

  onSubmit() {
    console.log(this.user);
  }

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from "app/shared/models/user.model";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
user: User;

  onSubmit() {
    console.log(this.user);
  }

  constructor() { }

  ngOnInit() {
  }

}

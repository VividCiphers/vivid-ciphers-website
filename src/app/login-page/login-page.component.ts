import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from "app/shared/models/user.model";
import { Profile } from "app/shared/models/profile.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
user: User;
@Output() titleChange: EventEmitter<string> = new EventEmitter<string>();


  onSubmit() {
    console.log(this.user);
  }

  constructor(private route: ActivatedRoute) {
    this.user = new User(); 
    this.user.profile = new Profile();
   }

  ngOnInit() {
  }

}

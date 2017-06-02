import { UserService } from "../../app/shared/user.service";
import { User } from '../shared/models/user.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {

  constructor(private userService: UserService,
              private router: Router) { }

  private newUser = {};

  onSubmit() {
    this.userService.createUser(this.newUser)
      .subscribe(
        (response) => {
          const token: string = response;
          this.userService.setToken(token);
          this.router.navigate(['/']);
        },
        (error) => {
          console.error(`There was a problem signing up: ${error}`);
        }
      );
  }
}

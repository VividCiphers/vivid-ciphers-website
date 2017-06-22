import { UserService } from "../../app/shared/user.service";
import { User } from '../shared/models/user.model';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {
  @Output() userExists = new EventEmitter<boolean>();
  user: User;
  passwordConfirm: string;

  constructor(private userService: UserService,
              private router: Router) { }

  onSubmit() {
    this.userService.createUser(this.user)
      .subscribe(
        (response) => {
          const token: string = response;
          this.userService.setToken(token);
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
          console.error(`There was a problem signing up: ${error}`);
        }
      );
  }
}

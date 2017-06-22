import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from "app/shared/models/user.model";

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.css']
})
export class ForgotPasswordPageComponent {
  // Eventually this will be a new instance of the user model.
  // newUser: User = new User();
  user: User;

  onSubmit(form: NgForm) {
    console.log(this.user);
  }
}

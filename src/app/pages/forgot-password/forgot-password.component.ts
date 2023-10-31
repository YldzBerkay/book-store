import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  formError: any;
  formPasswordError: any;
  submitted = false;

  forgotPasswordAnimation: Record<string, any> = {
    path: '/assets/json/forgot_password_animation.json', // Path to your animation JSON file
    renderer: 'svg', // Use 'canvas' or 'html' for different renderers
    loop: true,
    autoplay: true,
  };

  forgotPassword = new UntypedFormGroup({
    email: new UntypedFormControl('', [
      Validators.required,
    ]),
    password: new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
  });

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.submitted = true;
  }
}

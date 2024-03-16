import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ForgotPasswordRequestCommand, ResetPasswordRequestCommand } from 'src/app/models/commands/auth-request-commands';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  formError: any;
  formPasswordError: any;
  isSuccessful = false;
  submitted = false;
  hasParams = false;
  paramId: string;
  constructor(private authService: AuthService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.hasParams = true;
        const id = params['id']; 
        this.paramId = id;
      }
    });
  }
  forgotPasswordAnimation: Record<string, any> = {
    path: '/assets/json/forgot_password_animation.json', 
    renderer: 'svg', 
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

  resetPassword = new UntypedFormGroup({
    password: new UntypedFormControl('', [
      Validators.required,
    ]),
    passwordConfirm: new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
  });

  async resetPasswordSubmit(): Promise<void> {
    this.submitted = true;
    const command: ResetPasswordRequestCommand = {
      Password: this.resetPassword.value.password,
      PasswordConfirm: this.resetPassword.value.passwordConfirm,
      PasswordResetToken: this.paramId
    };
    const response = await this.authService.resetPassword(command);
    if (response.IsSuccessful) {
      this.router.navigate(['/sign-in']);
    } else {
      this.formPasswordError = response.Error.join(" ");
    }
  }

  async onSubmit(): Promise<void> {
    this.submitted = true;
    const common: ForgotPasswordRequestCommand = {
      Email: this.forgotPassword.value.email
    };

    const response = await this.authService.forgotPassword(common);
    if (response.IsSuccessful) {
      this.isSuccessful = true;
      
    } else {
      this.formError = response.Error.join(" ");
      this.isSuccessful = false;
    }
  }
}

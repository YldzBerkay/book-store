import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {CodeInputComponent} from 'angular-code-input';
import { SendOtpVerificationRequestCommand } from 'src/app/models/commands/auth-request-commands';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit{
  formError: any;
  submitted = false;

  verifyAnimation: Record<string, any> = {
    path: '/assets/json/verify_animation.json', // Path to your animation JSON file
    renderer: 'svg', // Use 'canvas' or 'html' for different renderers
    loop: true,
    autoplay: true,
  };

  verifyForm = new UntypedFormGroup({
    code: new UntypedFormControl(''),
  });

  @ViewChild('codeInput') codeInput !: CodeInputComponent;
  constructor(private router:Router, private authService: AuthService) { }

  ngOnInit(): void {
    if(this.authService.userEmail == null){
      this.router.navigate(['/sign-up']);
    }
  }

  onCodeChanged(code: string) {
  }

  onCodeCompleted(code: string) {
    this.verifyForm.patchValue({ code: code });
    this.onSubmit();
  }

  async onSubmit(): Promise<void> {
    
    const command : SendOtpVerificationRequestCommand = {
      Email: this.authService.userEmail,
      Password: this.authService.userPassword,
      Token: this.verifyForm.value.code
    };
    const response = await this.authService.sendOtpVerification(command);
    if (response.IsSuccessful) {
      this.router.navigate(['/sign-up-informations']);
    } else {
      this.formError = response.Data;
    }
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {CodeInputComponent} from 'angular-code-input';
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

  onSubmit(): void {
    this.authService.sendOtpVerification(this.verifyForm.value.code, this.authService.userEmail).subscribe(
      (res) => {
        this.router.navigate(['/sign-up-informations']);
      },
      (err) => {
        this.formError = err.error;
      }
    );
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {CodeInputComponent} from 'angular-code-input';

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
  constructor(private router:Router) { }

  ngOnInit(): void {}

  onCodeChanged(code: string) {
  }

  onCodeCompleted(code: string) {
    this.verifyForm.patchValue({ code: code });
    this.onSubmit();
  }

  onSubmit(): void {
    this.submitted = true;
    console.log(this.verifyForm.value);
    this.router.navigate(['/sign-up-informations']);
  }
}

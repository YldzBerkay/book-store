import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  hide = true;
  formError: any;
  formPasswordError: any;
  submitted = false;

  welcomeAnimation: Record<string, any> = {
    path: '/assets/json/welcome_animation.json', // Path to your animation JSON file
    renderer: 'svg', // Use 'canvas' or 'html' for different renderers
    loop: true,
    autoplay: true,
  };

  constructor(private router:Router) { }

  registerForm = new UntypedFormGroup({
    email: new UntypedFormControl('', [
      Validators.required,
    ]),
    password: new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
  });

  ngOnInit(): void { }

  onSubmit(): void {
    this.submitted = true;
    this.router.navigate(['/login-informations']);
  }
}

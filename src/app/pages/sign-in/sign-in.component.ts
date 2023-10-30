import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
    hide = true;
    formError: any;
    formPasswordError: any;
    submitted = false;

    loginAnimation: Record<string, any> = {
        path: '/assets/json/login_animation.json', // Path to your animation JSON file
        renderer: 'svg', // Use 'canvas' or 'html' for different renderers
        loop: true,
        autoplay: true,
    };

    constructor() { }

    signInForm = new UntypedFormGroup({
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
    }
}

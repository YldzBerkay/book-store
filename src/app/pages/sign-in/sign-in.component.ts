import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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

    constructor(private authService: AuthService, private router:Router) { }

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

    async onSubmit(): Promise<void> {
        this.formError = null;
        this.submitted = true;
        const command = {
            Email: this.signInForm.value.email,
            Password: this.signInForm.value.password
        };
        const response = await this.authService.signIn(command);
        if (response.IsSuccessful) {
            this.authService.userEmail = this.signInForm.value.email;
            this.authService.userPassword = this.signInForm.value.password;
            if(!response.Data.User.IsRegistrationCompleted){
                this.router.navigate(['/sign-up-informations']);
            }
        }else{
            this.formError = response.Error.join(" ");
            this.submitted = false;
        }
    }
}

import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpRequestCommand } from 'src/app/models/commands/auth-request-commands';
import { AuthService } from 'src/app/services/auth.service';

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
    errorMessage = '';

    welcomeAnimation: Record<string, any> = {
        path: '/assets/json/welcome_animation.json', // Path to your animation JSON file
        renderer: 'svg', // Use 'canvas' or 'html' for different renderers
        loop: true,
        autoplay: true,
    };

    constructor(private router: Router, private authService: AuthService) { }

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

    async onSubmit(): Promise<void> {
        const command : SignUpRequestCommand = {
            Email: this.registerForm.value.email,
            Password: this.registerForm.value.password
        };
        const response = await this.authService.signUp(command);
        
        if (response.IsSuccessful) {
            this.authService.userEmail = this.registerForm.value.email;
            this.authService.userPassword = this.registerForm.value.password;
            this.router.navigate(['/verify']);
        } else {
            this.formError = response.Error.join(" ");
        }
    }
}

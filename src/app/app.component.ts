import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RefreshTokenRequestCommand } from './models/commands/auth-request-commands';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    showRegisterOutlet: boolean = false;
    title = 'book-store';
    tokenExpires: Date = new Date();

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthService) {}

    ngOnInit(): void {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.showRegisterOutlet = this.isRegisterRoute(event.url);
                this.refreshToken();
            }
        });
    }

    private async refreshToken(): Promise<void> {

        this.tokenExpires = new Date(localStorage.getItem('userExpire') || '');
        const currentTime = new Date();
        if (currentTime > this.tokenExpires) {
            const command: RefreshTokenRequestCommand = {
                RefreshToken: localStorage.getItem('userRefreshToken') || '',
                UserId: localStorage.getItem('userId') || ''
            };
            const response = await this.authService.refreshToken(command);

            if (response.IsSuccessful) {
                this.authService.updateToken(response.Data);
            }
        }
    }


    private isRegisterRoute(url: string): boolean {
        const registerRoutes = ['/sign-up', '/sign-up-informations', '/verify', '/forgot-password', '/sign-in'];
        return registerRoutes.some(route => url.includes(route));
    }
}

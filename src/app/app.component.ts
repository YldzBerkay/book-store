import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    showRegisterOutlet: boolean = false;
    title = 'book-store';

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
        // Subscribe to route changes to update visibility
        this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
            console.log(this.showRegisterOutlet);

        });
    }

    ngOnInit(): void {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                // Update registerMode based on the current route
                this.showRegisterOutlet = this.isRegisterRoute(event.url);
            }
        });
    }

    private isRegisterRoute(url: string): boolean {
        // Define an array of paths that require registerMode to be true
        const registerRoutes = ['/sign-up', '/sign-up-informations', '/verify', '/forgot-password', '/sign-in'];

        // Check if the current route is in the registerRoutes array
        return registerRoutes.some(route => url.includes(route));
    }
}

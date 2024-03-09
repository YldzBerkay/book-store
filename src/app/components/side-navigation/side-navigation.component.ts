import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-side-navigation',
    templateUrl: './side-navigation.component.html',
    styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {
    link = '/contents';
    expanded: any;
    mobileMenuActive = false;
    isOpened: boolean = true;
    isExpanded: boolean = true;
    private shouldClick: boolean = true;
    user: any;

    constructor(private location: Location, public authService:AuthService) { }

    ngOnInit(): void {
        const storedValue = localStorage.getItem('expanded');

        const isSmallScreen = window.innerWidth < 1200;

        if (isSmallScreen) {
            this.shouldClick = false;
            this.isExpanded = true;
            this.isOpened = false;
        } else {
            this.shouldClick = true;

            this.isExpanded = storedValue ? JSON.parse(storedValue) : true;

            this.isOpened = true;
        }
    }

    @ViewChild('buttonRef', { static: true }) buttonRef!: ElementRef;
    @HostListener('window:resize', ['$event'])
    onWindowResize(event: any) {
        const isSmallScreen = this.isSmallScreen();
        const storedValue = localStorage.getItem('expanded');

        if (isSmallScreen) {
            if (this.shouldClick) {
                this.isOpened = false;
                this.shouldClick = false;
                this.isExpanded = true;
            }
        } else {
            this.shouldClick = true;
            this.isExpanded = storedValue ? JSON.parse(storedValue) : false;
            this.isOpened = true;
        }
    }

    urlPath(url: string) {
        const path = this.location.path();
        return path.includes(url);
    }

    saveData() {
        localStorage.setItem('expanded', JSON.stringify(this.isExpanded));
    }

    isSmallScreen(): boolean {
        return window.innerWidth < 1200;
    }

    signOut() {
        this.authService.removeUser();
    }
}

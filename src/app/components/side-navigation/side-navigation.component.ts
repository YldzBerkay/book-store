import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/auth/user';

@Component({
    selector: 'app-side-navigation',
    templateUrl: './side-navigation.component.html',
    styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {
    link = '/contents';
    expanded: any;
    mobileMenuActive = false;
    isOpened: boolean = false;
    isExpanded: boolean = true;
    user: User;
    private shouldClick: boolean = true;

    constructor(private location: Location, public authService:AuthService) { }

    ngOnInit(): void {
        this.user = this.authService.getUserInfoFromStorage();   
    }

    urlPath(url: string) {
        const path = this.location.path();
        return path.includes(url);
    }

    signOut() {
        this.authService.removeUser();
    }
}

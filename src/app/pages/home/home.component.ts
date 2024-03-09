import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    products: any[] = [
        {
            id: 1,
            title: 'The Catcher in the Rye',
        },
        {
            id: 1,
            title: 'The Catcher in the Rye',
        },{
            id: 1,
            title: 'The Catcher in the Rye',
        },{
            id: 1,
            title: 'The Catcher in the Rye',
        },{
            id: 1,
            title: 'The Catcher in the Rye',
        },{
            id: 1,
            title: 'The Catcher in the Rye',
        },
    ];

    responsiveOptions: any[] | undefined;

    constructor(public authService:AuthService) { }

    ngOnInit() {

        this.responsiveOptions = [
            {
                breakpoint: '1000px',
                numVisible: 3,
                numScroll: 1,
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 1,
            },
            {
                breakpoint: '570px',
                numVisible: 1,
                numScroll: 1,
            },
        ];
    }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    books: any[] = [
        {
            id: 1,
            img:'assets/img/stephan_king_it.png',
            cardName: 'The Catcher in the Rye1',
            cardType: 'Novel',
            cardPrice: 10,
        },
        {
            id: 2,
            img:'assets/img/stephen-king-three-classic-novels-box-set.png',
            cardName: 'The Catcher in the Rye2',
            cardType: 'Novel',
            cardPrice: 10,
        },
        {
            id: 3,
            img:'assets/img/stephan_king_the_stand.png',
            cardName: 'The Catcher in the Rye3',
            cardType: 'Novel',
            cardPrice: 10,
        },
        {
            id: 4,
            img:'assets/img/stephan_king_carrie.png',
            cardName: 'The Catcher in the Rye4',
            cardType: 'Novel',
            cardPrice: 10,
        },
        {
            id: 5,
            img:'assets/img/stephan_king_1.png',
            cardName: 'The Catcher in the Rye5',
            cardType: 'Novel',
            cardPrice: 10,
        },
        {
            id: 6,
            img:'assets/img/stephan_king_it.png',
            cardName: 'The Catcher in the Rye6',
            cardType: 'Novel',
            cardPrice: 10,
        },
        {
            id: 7,
            img:'assets/img/stephan_king_it.png',
            cardName: 'The Catcher in the Rye7',
            cardType: 'Novel',
            cardPrice: 10,
        },
        {
            id: 8,
            img:'assets/img/stephan_king_it.png',
            cardName: 'The Catcher in the Rye8',
            cardType: 'Novel',
            cardPrice: 10,
        },
        {
            id: 9,
            img:'assets/img/stephan_king_it.png',
            cardName: 'The Catcher in the Rye9',
            cardType: 'Novel',
            cardPrice: 10,
        },
        {
            id: 10,
            img:'assets/img/stephan_king_it.png',
            cardName: 'The Catcher in the Rye10',
            cardType: 'Novel',
            cardPrice: 10,
        }
    ]

    constructor(public authService: AuthService) { }

    
}

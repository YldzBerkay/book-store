import { Component, Input, OnInit, OnDestroy, Renderer2, ElementRef } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-carousel-multi',
  templateUrl: './carousel-multi.component.html',
  styleUrls: ['./carousel-multi.component.scss'],
  animations: [
    trigger('slideContainer', [
      transition('* => *', [
        style({ transform: 'translateX({{offsetX}}%)' }),
        animate('.5s ease-out')
      ])
    ])
  ]
})
export class CarouselMultiComponent implements OnInit, OnDestroy {
  @Input() books: any[] = [];
  showedItems: any[] = [];
  private resizeListener: () => void;
  firstIndex: number = 0;
  maxItems: number = 5;
  previousDisabled: boolean = true;
  nextDisabled: boolean = false;
  animationState: number = 0;
  offsetX: string = '0';

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.onResize();
    this.updateShowedItems();
    this.updateButtonStates();
    this.resizeListener = this.renderer.listen('window', 'resize', () => this.onResize());
  }

  ngOnDestroy() {
    this.resizeListener();
  }

  private updateShowedItems() {
    this.showedItems = this.books.slice(this.firstIndex, this.firstIndex + this.maxItems);
  }

  private updateButtonStates() {
    this.previousDisabled = this.firstIndex === 0;
    this.nextDisabled = (this.firstIndex + this.maxItems) >= this.books.length;

    if (this.firstIndex <= 0) {
      this.firstIndex = 0;
      this.previousDisabled = true;
    }

    if (this.nextDisabled) {
      this.firstIndex = this.books.length - this.maxItems;
    }
}


  nextFunction() {
    if (!this.nextDisabled) {
      this.firstIndex+= this.maxItems;
      this.updateView('next');
    }
  }

  previousFunction() {
    if (!this.previousDisabled) {
      this.firstIndex+= -this.maxItems;
      this.updateView('previous');
    }
  }

  private updateView(direction: string) {
    this.offsetX = direction === 'next' ? '100' : '-100';
    this.animationState++;
    this.updateButtonStates();
    this.updateShowedItems();
}

  private onResize() {
    this.setMaxItems();
    this.updateShowedItems();
    this.updateButtonStates();
  }

  private setMaxItems() {
    const width = window.innerWidth;
    this.maxItems = width > 1200 ? 5 : width > 900 ? 4 : width > 600 ? 3 : width > 400 ? 2 : 1;
    this.firstIndex = Math.max(0, Math.min(this.firstIndex, this.books.length - this.maxItems));
  }
}

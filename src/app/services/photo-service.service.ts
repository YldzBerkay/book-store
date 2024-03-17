import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  getData() {
    return [
      {
        itemImageSrc: 'assets/img/home_bg01.png'
      },
      {
        itemImageSrc: 'assets/img/home_bg02.png',
      }
      
    ];
  }

  getImages() {
    return Promise.resolve(this.getData());
  }
}

import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-ofert',
  standalone: true,
  imports: [CarouselModule, ButtonModule],
  templateUrl: './ofert.component.html',
  styleUrl: './ofert.component.scss'
})
export class OfertComponent {
  cars!: CARS[];

  responsiveOptions: any[] | undefined;

  constructor() {}

  ngOnInit() {
      // this.productService.getProductsSmall().then((products) => {
      //     this.products = products;
      // });
      this.cars = [
        {
          name: 'Mercedes',
          priceFrom: 99,
          image: 'car-1.jpg'
        },
        {
          name: 'BMW',
          priceFrom: 199,
          image: 'car-1.jpg'
        },
        {
          name: 'Mercedes',
          priceFrom: 99,
          image: 'car-1.jpg'
        },
        {
          name: 'BMW',
          priceFrom: 199,
          image: 'car-1.jpg'
        }
      ]


      this.responsiveOptions = [
          {
              breakpoint: '1199px',
              numVisible: 1,
              numScroll: 1
          },
          {
              breakpoint: '991px',
              numVisible: 2,
              numScroll: 1
          },
          {
              breakpoint: '767px',
              numVisible: 1,
              numScroll: 1
          }
      ];
  }
}

export interface CARS{
  name: string,
  priceFrom: number,
  image: string
}

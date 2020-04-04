import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }
  divisor = 'assets/img/rectangle.png';
  products = [
    {
      product:{
        name: 'rain',
        css: 'url(\'assets/img/pic_4.png\')',
        img: 'assets/img/umbrella.png',
        title: 'Puffi RAIN',
        description : 'Descripción del producto, este es un texto simulado',
        cta : 'ver mas'
    }
  },
  {
    product:{
      name: 'puff',
      css: 'url(\'assets/img/pic_3.png\')',
      img: 'assets/img/puff.png',
      title: 'Puffi PUFF',
      description : 'Descripción del producto, este es un texto simulado',
      cta : 'ver mas'
  }},
  {
    product:{
      name: 'cart',
      css: 'url(\'assets/img/pic_2.png\')',
      img: 'assets/img/pic_11.png',
      title: 'Puffi CART',
      description : 'Descripción del producto, este es un texto simulado',
      cta : 'ver mas'
  }},
  {
    product:{
      name: 'nap',
      css: 'url(\'assets/img/pic_1.png\')',
      img: 'assets/img/pic_12.png',
      title: 'Puffi NAP',
      description : 'Descripción del producto, este es un texto simulado',
      cta : 'ver mas'
  }
}
  ];

  ngOnInit(): void {
  }

}

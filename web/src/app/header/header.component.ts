import { Component, OnInit,  HostListener, ViewEncapsulation } from '@angular/core';
import { MatCarousel, MatCarouselComponent, MatCarouselSlide } from '@ngmodule/material-carousel';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar'; 
import {MatAccordion} from '@angular/material/expansion'; 
import { animate, state, style, transition, trigger } from '@angular/animations';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor() { }
  images = [
    {'image':'assets/img/layer_1.png'},
    {'image':'assets/img/layer_2.png'}
  ];
  timings="250ms ease-in"
  autoplay="true";
  interval="5000";
  color="accent";
  maxWidth="auto";
  proportion="52";
  slides="5";
  loop="true";
  hideArrows=true;
  hideIndicators=false;
  useKeyboard=true;
  useMouseWheel=false;
  orientation="ltr";
  overlayColor="#00000040";
  hideOverlay=false;

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  logo = "assets/img/2.png";
  menu = "assets/img/menu.png";
  menues = [
    {image: 'assets/img/1.png', content: 'puffi puff', divider:true},
    {image: 'assets/img/3.png', content: 'puffi rain', divider:true},
    {image: 'assets/img/4.png', content: 'puffi cart', divider:true},
    {image: 'assets/img/5.png', content: 'puffi nap', divider:false}
  ];
  navBar = true;
  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(e) {
    let scrolling = e.path[1].scrollY;
    if (scrolling > 600) {
      this.navBar = false;
    }else{
      this.navBar = true;
    }
  }
  divScroll(e) {
  }
}

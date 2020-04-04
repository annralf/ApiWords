import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  logo = "assets/img/pic_20.png";
  waranty = "assets/img/pic_19.png";
  stamp = "assets/img/pic_18.png";
  fb = "assets/img/pic_17.png";
  tw = "assets/img/pic_16.png";
  ig = "assets/img/pic_15.png";
  brandlive = "assets/img/pic_14.png";
  
  
  ngOnInit(): void {
  }

}

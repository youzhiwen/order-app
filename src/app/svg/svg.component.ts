import { Component, OnInit } from '@angular/core';

import { Rect } from '@app/_models';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.svg',
  styleUrls: ['./svg.component.css']
})
export class SvgComponent {
  fillColor = 'grey';
  rects: Rect[] = [];

  ngOnInit() {
    this.drawGraphic();
  }

  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }

  drawGraphic(){
    var rect1 = new Rect(
      "B150",
      180,
      180,
      160,
      140,				
      210,
      210
    );
    var rect2 = new Rect(
      "C150",
      180,
      80,
      150,
      100,				
      210,
      110
    );
    var rect3 = new Rect(
      "D150",
      180,
      60,
      120,
      140,				
      210,
      60
    );
   this.rects.push(rect1);
   //this.rects.push(rect2);
   //this.rects.push(rect3);
  }
}

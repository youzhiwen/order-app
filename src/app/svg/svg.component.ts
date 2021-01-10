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
    //this.drawGraphic();
    //this.drawGraphicTwoBoxes();
    //this.drawGraphicThreeBoxes();
    //this.drawGraphicFourBoxes();
    this.drawGraphicSixBoxes();
  }

  drawGraphic(){
    var oneB = new Rect(
      "B150",
      50,
      62.5,
      200,
      165,
      125.25,
      150
    );
    var oneM = new Rect(
      "MB25",
      118.25,
      105.5,
      62.5,
      90,
      125.25,
      150
    );
    var oneC = new Rect(
      "C150",
      75,
      82.5,
      150,
      135,
      122,
      150
    );
    var oneS = new Rect(
      "GM120",
      87.5,
      92.5,
      125,
      115,
      122,
      150
    );
   this.rects.push(oneB);
   //this.rects.push(oneM);
   //this.rects.push(oneC);
   //this.rects.push(oneS);
  }
  drawGraphicTwoBoxes(){
    var topC = new Rect(
      "C150",
      90,
      42,
      120,
      108,
      125.25,
      100
    );
    var bottomC = new Rect(
      "F140",
      90,
      150,
      120,
      108,
      125.25,
      200
    );
    var bottomB = new Rect(
      "B150",
      70,
      150,
      160,
      140,
      125.25,
      200
    );
    this.rects.push(topC);
    //this.rects.push(bottomC);
    this.rects.push(bottomB);
  }
  
  drawGraphicThreeBoxes(){
    var topS = new Rect(
      "GM120",
      107,
      28.5,
      90,
      81,
      125.25,
      70
    );
    var middleS = new Rect(
      "GB120",
      107,
      109.5,
      90,
      81,
      125.25,
      151
    );
    var bottomB = new Rect(
      "B150",
      92,
      190.5,
      120,
      105,
      125.25,
      243
    );
    this.rects.push(topS);
    this.rects.push(middleS);
    this.rects.push(bottomB);
  }
  drawGraphicFourBoxes(){
    var topLeftS = new Rect(
      "GB120",
      50,
      63,
      100,
      92,
      75.25,
      109
    );
    var bottomLeftS = new Rect(
      "GC120",
      150,
      63,
      100,
      92,
      175.25,
      109
    );
    var topRightS = new Rect(
      "Gall120",
      50,
      155,
      100,
      92,
      75.25,
      209
    );
    var bottomRightS = new Rect(
      "GB120",
      150,
      155,
      100,
      92,
      175.25,
      209
    );
    this.rects.push(topLeftS);
    this.rects.push(bottomLeftS);
    this.rects.push(topRightS);
    this.rects.push(bottomRightS);
  }
  drawGraphicSixBoxes(){
    var topLeftS = new Rect(
      "GB120",
      75,
      46.5,
      75,
      69,
      90.25,
      81
    );
    var middleLeftS = new Rect(
      "GC120",
      75,
      115.5,
      75,
      69,
      90.25,
      150
    );
    var bottomLeftS = new Rect(
      "GC120",
      75,
      184.5,
      75,
      69,
      90.25,
      219
    );
    var topRightS = new Rect(
      "Gall120",
      150,
      46.5,
      75,
      69,
      155.25,
      81
    );
    var middleRightS = new Rect(
      "GB120",
      150,
      115.5,
      75,
      69,
      155.25,
      150
    );
    var bottomRightS = new Rect(
      "GB120",
      150,
      184.5,
      75,
      69,
      155.25,
      219
    );
    this.rects.push(topLeftS);
    this.rects.push(middleLeftS);
    this.rects.push(bottomLeftS);
    this.rects.push(topRightS);
    this.rects.push(middleRightS);
    this.rects.push(bottomRightS);
  }
}

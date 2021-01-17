import { RecursiveTemplateAstVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { Rect } from '@app/_models';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.svg',
  styleUrls: ['./svg.component.css']
})
export class SvgComponent {
  rects: Rect[] = [];
  tag: string;

  fillColor(tag:string)
  {
    console.log(this.tag);
      if (tag === "grey")
      {
      return "grey";
      }
      else
      {
      return "green";
      }
  }
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
      150,
      "green"
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
      100,
      "grey"
    );
    var bottomC = new Rect(
      "F140",
      90,
      150,
      120,
      108,
      125.25,
      200,
      "green"
    );
    var bottomB = new Rect(
      "B150",
      70,
      150,
      160,
      140,
      125.25,
      200,
      "grey"
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
      70,
      "grey"
    );
    var middleS = new Rect(
      "GB120",
      107,
      109.5,
      90,
      81,
      125.25,
      151,
      "green"
    );
    var bottomB = new Rect(
      "B150",
      92,
      190.5,
      120,
      105,
      125.25,
      243,
      "grey"
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
      109,
      "grey"
    );
    var bottomLeftS = new Rect(
      "GC120",
      150,
      63,
      100,
      92,
      175.25,
      109,
      "green"
    );
    var topRightS = new Rect(
      "Gall120",
      50,
      155,
      100,
      92,
      75.25,
      209,
      "grey"
    );
    var bottomRightS = new Rect(
      "GB120",
      150,
      155,
      100,
      92,
      175.25,
      209,
      "grey"
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
      81,
      "grey"
    );
    var middleLeftS = new Rect(
      "GC120",
      75,
      115.5,
      75,
      69,
      90.25,
      150,
      "grey"
    );
    var bottomLeftS = new Rect(
      "GC120",
      75,
      184.5,
      75,
      69,
      90.25,
      219,
      "green"
    );
    var topRightS = new Rect(
      "Gall120",
      150,
      46.5,
      75,
      69,
      155.25,
      81,
      "green"
    );
    var middleRightS = new Rect(
      "GB120",
      150,
      115.5,
      75,
      69,
      155.25,
      150,
      "green"
    );
    var bottomRightS = new Rect(
      "GB120",
      150,
      184.5,
      75,
      69,
      155.25,
      219,
      "green"
    );
    this.rects.push(topLeftS);
    this.rects.push(middleLeftS);
    this.rects.push(bottomLeftS);
    this.rects.push(topRightS);
    this.rects.push(middleRightS);
    this.rects.push(bottomRightS);
  }
} 

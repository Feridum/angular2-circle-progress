import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'circle-progress',
  templateUrl: 'circle-progress.component.html',
})
export class CircleProgressComponent implements OnInit {

  @Input() percent:number = 0;
  @Input() boxSize:number = 200;
  @Input() radius:number = 0.9*this.boxSize ;
  @Input() time:number = 0;
  @Input() border:number = 20;
  @Input() color:string = 'green';
  @Input() backgroundColor:string = 'white';

  @Input() lowColor:string = this.color;
  @Input() middleColor:string = this.color;
  @Input() interColor:string = this.color;
  @Input() highColor:string = this.color;

  @Input() fontColor:string = 'black';
  @Input() fontSize: number = 12;
  @Input() fontFamily:string = 'Times New Roman';
  @Input() fontX:string = '50%';
  @Input() fontY:string = '55%';

  @Input() innerFill:string = "white";
  @Input() textAnchor:string = "middle";


  angle:number;
  radian:number;
  cx:number;
  cy:number;

  x0:number;
  y0:number;
  rx:number;
  ry:number;

  innerRadius:number;
  circleText:string = '0%';

  x;
  y;

  arcSweep;
  circleM;
  circleL;
  circleA;
  circleEnd;



  canAnimate:boolean = true;

  ngOnInit() {
    this.setInputs();
    this.calculateAll();
  }

  ngOnChanges(){
    this.setInputs();
    this.calculateAll();
  }

  private setInputs() {

    if(this.percent <0){
      this.percent *= -1;
    }

    if(this.time == 0){
      this.circleText = this.percent+'%';
      this.setColor(this.percent);
      this.angle = this.percToAngle(this.percent);
    }else{
      this.angle = 0;
    }

    this.radian = this.angleToRad(this.angle);

    this.cx = this.boxSize / 2;
    this.cy = this.boxSize / 2;


    this.x0 = this.cx;
    this.y0 = this.cy - this.radius;

    this.rx = this.ry = this.radius;

    this.innerRadius = this.radius - this.border;

  }

  private calculateAll() {
    this.calculateAngle(this.radius, this.radian);
    this.setArcSet(this.angle);
    this.circleM = this.createArgument('M', this.cx, this.cy);
    this.circleL = this.createArgument('L', this.x0, this.y0);
    this.circleA = this.createArgument('A', this.rx, this.ry);
  }

  private calculateAngle(r, rad) {
    this.x = this.cx + r * Math.sin(rad);
    this.y = this.cy - r * Math.cos(rad);

    if (this.percent == 100) {
      this.x--;
    }

    this.circleEnd = this.createArgument(null, this.x, this.y);
  }

  private setArcSet(angle) {
    if (Math.round(angle) <= 180) {
      this.arcSweep = this.createArgument(null, 0, 1);
    } else if (Math.round(angle) > 180) {
      this.arcSweep = this.createArgument(null, 1, 1);
    }
  }

  private createArgument(prefix:string, val1:number, val2:number) {

    if (prefix != null) {
      return prefix + val1 + ',' + val2 + ' ';
    } else {
      return val1 + ',' + val2 + ' ';
    }

  }

  private percToAngle(perc:number){
    return perc*3.6;
  }


  private angleToRad(angle) {
    return (angle * Math.PI) / 180;
  }

  public animate() {
    if(this.canAnimate) {
      this.canAnimate = false;
      let time = this.time * 1000 / this.percent;

      this.animationLoop(1, time);

    }else{
      return;
    }

  }


  private animationLoop(i, time) {
    setTimeout(()=> {
      this.angle = this.percToAngle(i);
      this.radian = this.angleToRad(this.angle);
      this.setArcSet(this.angle);
      this.setColor(i);
      this.circleText = i + '%';
      this.calculateAngle(this.radius, this.radian);
      i++;
      if (i <= this.percent) {
        this.animationLoop(i, time);
      }
    },time)
    if(i >= this.percent){
      this.canAnimate = true;
    }
  }

  private setColor(percent){
    if(percent <=25){
      this.color = this.lowColor;
    }else if(percent <=50){
      this.color = this.middleColor;
    }else if(percent <=75){
      this.color = this.interColor;
    }else if(percent >75){
      this.color = this.highColor;
    }
  }

}

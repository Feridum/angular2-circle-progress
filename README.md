# CircleProgress

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.11-webpack.2.

# [Demo](https://feridum.github.io/angular2-circle-progress/)

## About
It is a simple circle progress component created for Angualar2. When it was creating Angular2 was in RC5 version.
Component is based only on SVG Graphics and has various of options to customize it.


## Options


Option | Type | Default | Description |Example
--- | --- | --- | --- | ---
percent | `number` | 0 | Number of percent you want to show | `[percent]="20"`
boxSize | `number` | 200| Size of whole svg element | `[boxSize]="300"`
radius | `number` | 180 | Radius od circle | `[radius]="90"`
time| `number` | 0 | Time in sec for progress animation| `[time]="2"` 
border | `number` | 20 | Width of circle | `[border]="30"`
color | `string` | 'green' | Color of progress circle | `[color] = "'blue'"`
backgroundColor | `string` | 'white' | Color of rest of the circle | `[backgroundColor] = "'purple'"`
lowColor | `string` | same os `color` option | Color for percent from 0%->25%| `[lowColor]="'red'"`
middleColor | `string` | look above | Color for percent from 26%->50%| `[lowColor]="'orange'"`
interColor | `string` | look above | Color for percent from 51%->75%| `[lowColor]="'yellow'"`
highColor | `string` | look above | Color for percent from 76%->100%| `[lowColor]="'green'"`
fontColor | `string` | black | Color of font inside circle | `[fontColor]="'grey'"`
fontSize | `number` | 12 | Size font inside circle | `[fontSize]="20"`
fontFamily | `string` | 'Times New Roman' | Family of font inside circle | `[fontColor]="'Arial'"`
fontX | `string` | '50%' | X position of text inside in circle | `[fontX]="'20%'"`
fontY | `string` | '55%' | Y position of text inside in circle | `[fontY]="'60%'"`
textAnchor | `string` | 'middle' | Align of text. Possible values(start, middle, end) | `[textAnchor]="'end'"`
innerFill | `string` | 'white' | Color of inner circle | `[fontY]="'pink'"`

## Animation
To start progress animation you have to call function `animate()` on component.

## Example
```
<circle-progress #circleProg1
                   [percent]="25"
                   [boxSize]="400"
                   [radius]="140"
                   [lowColor]="'red'"
                   [middleColor]="'orange'"
                   [interColor]="'#f1c40f'"
                   [highColor]="'#16a085'"
                   [border]="20"
                   [time]="5"
                   (click)="circleProg1.animate()"
  ></circle-progress>
  ```

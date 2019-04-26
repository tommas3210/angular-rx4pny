import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div>
      <h4>included=true</h4>
      <dw-slider [dwMarks]="marks" [dwDefaultValue]="37"></dw-slider>
      <dw-slider [dwMarks]="marks" dwIncluded dwRange [dwDefaultValue]="[26, 37]"></dw-slider>
      <h4>included=false</h4>
      <dw-slider [dwMarks]="marks" [dwIncluded]="false" [dwDefaultValue]="37"></dw-slider>
      <h4>marks & step</h4>
      <dw-slider [dwMarks]="marks" [dwStep]="10" [dwDefaultValue]="37"></dw-slider>
      <h4>step=null || dots=true</h4>
      <dw-slider [dwMarks]="marks" [dwStep]="null" [dwDefaultValue]="37"></dw-slider>
      <dw-slider [dwMarks]="marks" dwDots [dwDefaultValue]="37"></dw-slider>
      Change dwMarks dynamically: <button dw-button (click)="changeMarks()">Change dwMarks</button>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    h4 {
      margin: 0 0 16px;
    }

    .ant-slider-with-marks {
      margin-bottom: 44px;
    }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {

  marks: any = {
    0  : '0°C',
    26 : '26°C',
    37 : '37°C',
    100: {
      style: {
        color: '#f50',
      },
      label: '<strong>100°C</strong>',
    }
  };

  changeMarks() {
    this.marks = {
      20: '20%',
      99: '99%',
    };
  }

}

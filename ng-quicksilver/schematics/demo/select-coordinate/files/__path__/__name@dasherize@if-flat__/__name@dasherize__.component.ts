import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div>
      <dw-select style="width: 120px;" [(ngModel)]="selectedProvince" (ngModelChange)="provinceChange($event)">
        <dw-option *ngFor="let p of provinceData" [dwValue]="p" [dwLabel]="p"></dw-option>
      </dw-select>
      <dw-select style="width: 120px;" [(ngModel)]="selectedCity">
        <dw-option *ngFor="let c of cityData[selectedProvince]" [dwValue]="c" [dwLabel]="c"></dw-option>
      </dw-select>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      dw-select {
        margin-right: 8px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  selectedProvince = 'Zhejiang';
  selectedCity = 'Hangzhou';
  provinceData = [ 'Zhejiang', 'Jiangsu' ];
  cityData = {
    Zhejiang: [ 'Hangzhou', 'Ningbo', 'Wedwhou' ],
    Jiangsu : [ 'Nanjing', 'Suzhou', 'Zhenjiang' ]
  };

  provinceChange(value: string): void {
    this.selectedCity = this.cityData[ value ][ 0 ];
  }
}

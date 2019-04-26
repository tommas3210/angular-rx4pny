import { Component } from '@angular/core';
import getISOWeek from 'date-fns/get_iso_week';
import { en_US, zh_CN, DwI18nService } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-date-picker [(ngModel)]="date" (ngModelChange)="onChange($event)" dwShowTime></dw-date-picker>
    <br>
    <dw-month-picker [(ngModel)]="date" (ngModelChange)="onChange($event)" dwPlaceHolder="Select month"></dw-month-picker>
    <br>
    <dw-year-picker [(ngModel)]="date" (ngModelChange)="onChange($event)" dwPlaceHolder="Select year"></dw-year-picker>
    <br>
    <dw-range-picker [(ngModel)]="dateRange" (ngModelChange)="onChange($event)" dwShowTime></dw-range-picker>
    <br>
    <dw-week-picker [(ngModel)]="date" (ngModelChange)="getWeek($event)" dwPlaceHolder="Select week"></dw-week-picker>
    <br>
    <button dw-button dwType="default" (click)="changeLanguage()">Switch language for all pickers</button>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    dw-date-picker, dw-month-picker, dw-year-picker, dw-range-picker, dw-week-picker {
      margin: 0 8px 12px 0;
    }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})

export class <%= classify(name) %>Component {
  date = null; // new Date();
  dateRange = []; // [ new Date(), addDays(new Date(), 3) ];
  isEnglish = false;

  constructor(private i18n: DwI18nService) {}

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  getWeek(result: Date): void {
    console.log('week: ', getISOWeek(result));
  }

  changeLanguage(): void {
    this.i18n.setLocale(this.isEnglish ? zh_CN : en_US);
    this.isEnglish = !this.isEnglish;
  }
}

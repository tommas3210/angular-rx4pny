import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, map, switchMap } from 'rxjs/operators';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-select style="width: 100%;" dwMode="multiple" [(ngModel)]="selectedUser" dwPlaceHolder="Select users" dwAllowClear dwShowSearch [dwServerSearch]="true" (dwOnSearch)="onSearch($event)">
      <ng-container *ngFor="let o of optionList">
        <dw-option *ngIf="!isLoading" [dwValue]="o" [dwLabel]="o"></dw-option>
      </ng-container>
      <dw-option *ngIf="isLoading" dwDisabled dwCustomContent>
        <i class="anticon anticon-loading anticon-spin loading-icon"></i> Loading Data...
      </dw-option>
    </dw-select>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    .loading-icon {
      margin-right: 8px;
    }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component implements OnInit {
  randomUserUrl = 'https://api.randomuser.me/?results=5';
  searchChange$ = new BehaviorSubject('');
  optionList = [];
  selectedUser;
  isLoading = false;

  onSearch(value: string): void {
    this.isLoading = true;
    this.searchChange$.next(value);
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    // tslint:disable-next-line:no-any
    const getRandomNameList = (name: string) => this.http.get(`${this.randomUserUrl}`).pipe(map((res: any) => res.results)).pipe(map((list: any) => {
      return list.map(item => `${item.name.first} ${name}`);
    }));
    const optionList$: Observable<string[]> = this.searchChange$.asObservable().pipe(debounceTime(500)).pipe(switchMap(getRandomNameList));
    optionList$.subscribe(data => {
      this.optionList = data;
      this.isLoading = false;
    });
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-table
      #groupingTable
      [dwData]="displayData"
      dwBordered
      dwSize="middle"
      [dwWidthConfig]="['100px','200px','200px','100px','100px',null,null,'60px']"
      [dwScroll]="{ x:'130%',y: '240px' }">
      <thead>
        <tr style="height: 46px;">
          <th rowspan="4" dwLeft="0px" dwShowFilter [dwFilters]="filterName" (dwFilterChange)="search($event)">Name</th>
          <th colspan="4">Other</th>
          <th colspan="2">Company</th>
          <th rowspan="4" dwRight="0px">Gender</th>
        </tr>
        <tr style="height: 46px;">
          <th rowspan="3" dwShowSort [(dwSort)]="sortValue" (dwSortChange)="search(searchName)">Age</th>
          <th colspan="3">Address</th>
          <th rowspan="3">Company Address</th>
          <th rowspan="3">Company Name</th>
        </tr>
        <tr style="height: 46px;">
          <th rowspan="2">Street</th>
          <th colspan="2">Block</th>
        </tr>
        <tr style="height: 46px;">
          <th>Building</th>
          <th>Door No.</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of groupingTable.data">
          <td dwLeft="0px">{{data.name}}</td>
          <td>{{data.age}}</td>
          <td>{{data.street}}</td>
          <td>{{data.building}}</td>
          <td>{{data.number}}</td>
          <td>{{data.companyAddress}}</td>
          <td>{{data.companyName}}</td>
          <td dwRight="0px">{{data.gender}}</td>
        </tr>
      </tbody>
    </dw-table>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component implements OnInit {
  displayData = [];
  data = [];
  sortValue = null;
  filterName = [
    { text: 'Joe', value: 'Joe' },
    { text: 'John', value: 'John' }
  ];
  searchName = [];

  search(searchName: string[]): void {
    this.searchName = searchName;
    const filterFunc = (item) => {
      return this.searchName.length ? this.searchName.some(name => item.name.indexOf(name) !== -1) : true;
    };
    const data = this.data.filter(item => filterFunc(item));
    this.displayData = data.sort((a, b) => (this.sortValue === 'ascend') ? (a.age > b.age ? 1 : -1) : (b.age > a.age ? 1 : -1));
  }

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.displayData.push({
        name          : 'John Brown',
        age           : i + 1,
        street        : 'Lake Park',
        building      : 'C',
        number        : 2035,
        companyAddress: 'Lake Street 42',
        companyName   : 'SoftLake Co',
        gender        : 'M'
      });
    }
    this.data = [ ...this.displayData ];
  }
}

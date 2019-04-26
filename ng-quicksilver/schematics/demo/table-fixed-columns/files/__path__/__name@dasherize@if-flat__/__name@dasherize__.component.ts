import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-table #dwTable [dwData]="dataSet" [dwPageSize]="10" [dwScroll]="{x:'1300px'}">
      <thead>
        <tr>
          <th dwWidth="100px" dwLeft="0px">Full Name</th>
          <th dwWidth="100px" dwLeft="100px">Age</th>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
          <th>Column 4</th>
          <th>Column 5</th>
          <th>Column 6</th>
          <th>Column 7</th>
          <th>Column 8</th>
          <th dwWidth="100px" dwRight="0px">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of dwTable.data">
          <td dwLeft="0px">{{data.name}}</td>
          <td dwLeft="100px">{{data.age}}</td>
          <td>{{data.address}}</td>
          <td>{{data.address}}</td>
          <td>{{data.address}}</td>
          <td>{{data.address}}</td>
          <td>{{data.address}}</td>
          <td>{{data.address}}</td>
          <td>{{data.address}}</td>
          <td>{{data.address}}</td>
          <td dwRight="0px">
            <a>action</a>
          </td>
        </tr>
      </tbody>
    </dw-table>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {
  dataSet = [
    {
      key    : '1',
      name   : 'John Brown',
      age    : 32,
      address: 'New York Park',
    },
    {
      key    : '2',
      name   : 'Jim Green',
      age    : 40,
      address: 'London Park',
    }
  ];
}

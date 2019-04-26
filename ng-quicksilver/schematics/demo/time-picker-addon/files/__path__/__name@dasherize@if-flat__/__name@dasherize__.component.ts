import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-time-picker [(ngModel)]="time" [dwAddOn]="addOnTemplate" #timePicker></dw-time-picker>
    <ng-template #addOnTemplate>
      <button dw-button dwSize="small" dwType="primary" (click)="timePicker.close()">Ok</button>
    </ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  time: Date | null = null;
}

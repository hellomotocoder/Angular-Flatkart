import { Component } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent {
  sabut(): void {
    let a = 21;
    const ma = (a: number): number => a * 2;
  }
  properties: Array<any> = [
    {
      id: 1,
      typeofp: 'Home',
      cost: 12770,
    },
    {
      id: 2,
      typeofp: 'Flat',
      cost: 65000,
    },
    {
      id: 3,
      typeofp: 'Appartment',
      cost: 99000,
    },
    {
      id: 1,
      typeofp: 'Home',
      cost: 12770,
    },
    {
      id: 2,
      typeofp: 'Flat',
      cost: 65000,
    },
    {
      id: 3,
      typeofp: 'Appartment',
      cost: 99000,
    },
  ];
}

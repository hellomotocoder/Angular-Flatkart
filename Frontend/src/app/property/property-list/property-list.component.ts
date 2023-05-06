import { Component } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { HousingService } from 'src/app/services/housing.service';

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
  properties: any;
  constructor(private housingService: HousingService) {}

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe((data) => {
      this.properties = data;
      console.log(data);
    });
    // this.http.get('data/properties.json').subscribe((data) => {
    //   this.properties = data;
    //   console.log(data);
    // });
  }
}

import { Component } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';

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
  properties: Array<IProperty> = [];
  constructor(private housingService: HousingService) {}

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe(
      (data) => {
        this.properties = data;
        console.log(data);
      },
      (error) => {
        console.log('HttpError: ');
        console.log(error);
      }
    );
    // this.http.get('data/properties.json').subscribe((data) => {
    //   this.properties = data;
    //   console.log(data);
    // });
  }
}

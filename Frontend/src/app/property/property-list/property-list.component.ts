import { Component } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';

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
  SellRent: number = 1;
  properties: Array<IProperty> = [];
  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService
  ) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.url.toString());
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2; //means we are on Rent-Property URL else we are on base URL
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      (data) => {
        this.properties = data;
        console.log(data);
        console.log(this.route.snapshot.url.toString());
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

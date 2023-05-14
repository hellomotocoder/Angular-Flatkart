import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/IProperty.interface';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private http: HttpClient) {}
  getAllProperties(SellRent: number): Observable<IProperty[]> {
    return this.http.get('data/properties.json').pipe(
      map((data) => {
        const propertiesArray: Array<IProperty> = [];
        const jsonData = JSON.stringify(data);
        const tmp: Array<IProperty> = JSON.parse(jsonData);
        for (const id in tmp) {
          //if (data.hasOwnProperty(id) && tmp[id].sellRent == SellRent)
          propertiesArray.push(tmp[id]);
        }
        return propertiesArray;
      }) // @ts-ignore
    );
  }
}

import { Component, Input } from "@angular/core";


@Component({
  selector: `app-property-card`,
  templateUrl: 'property-card.component.html',
  styleUrls: ['property-card.component.css']
})
export class PropertyCardComponent{
property1 ="type inference[automatic] is here"
  property2: string = "strict type check added"

  @Input()
  property: any
}

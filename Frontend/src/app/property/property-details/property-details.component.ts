import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css'],
})
export class PropertyDetailsComponent implements OnInit {
  public propertyId!: number;
  public vijay: any = this.route.snapshot.paramMap.get('id/abc');
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // this.propertyId = Number(this.route.snapshot.params['id']);
    //same as below/above
    //+ converts to type number
    this.propertyId = +this.route.snapshot.params['id'];

    this.route.params.subscribe((params) => {
      this.propertyId = +params['id'];
    });
  }
  onNext() {
    this.propertyId++;
    this.router.navigate(['property-details', this.propertyId]);
  }
}

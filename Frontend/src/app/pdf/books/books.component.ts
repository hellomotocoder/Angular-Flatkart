import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  public chkOpen: boolean = false;
  constructor() {}
  ngOnInit() {}
  openLink() {
    window.open('/pdf/books');
  }
  valid() {
    this.chkOpen = true;
  }
}
